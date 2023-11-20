package com.ows.owsBackEnd.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

import com.ows.owsBackEnd.model.Archive;
import com.ows.owsBackEnd.model.Bin;
import com.ows.owsBackEnd.model.Content;
import com.ows.owsBackEnd.repository.ArchiveRepository;
import com.ows.owsBackEnd.repository.BinRepository;
import com.ows.owsBackEnd.repository.ContentRepository;
import com.ows.owsBackEnd.service.OwsService;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class OwsServiceImpl implements OwsService {

    private final ContentRepository contentRepository;
    private final ArchiveRepository archiveRepository;
    private final BinRepository binRepository;
    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    public OwsServiceImpl(ContentRepository contentRepository, ArchiveRepository archiveRepository, BinRepository binRepository) {
        this.contentRepository = contentRepository;
        this.archiveRepository = archiveRepository;
        this.binRepository = binRepository;
    }

    // ----- Content 부분 -----

    // Content를 저장한다
    @Override
    public Content saveContent(Content content) {
        // Content를 저장한다
        return contentRepository.save(content);
    }

    // 모든 Content를 불러온다
    @Override
    public List<Content> getAllContents() {
        // 모든 컨텐츠를 조회
        return contentRepository.findAll();
    }

    // Content ID로 특정 Content를 불러온다
    @Override
    public Content getContentById(long id) {
        // 컨텐츠 ID로 컨텐츠 조회
        return contentRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Content not found with id: " + id));
    }
    
    // NickName으로 Content 선택적 조회
    @Override
    public List<Content> getContentByNickName(String nickName) {
        return contentRepository.findByNickName(nickName);
    }

    @Override
    public Content updateContentById(Content updatedContent, long id, String loginId) {
        // 컨텐츠 ID로 기존 컨텐츠를 찾아 수정
        Content existingContent = contentRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Content not found with id: " + id));

        // 본인이 작성한 글인지 확인
        if (!existingContent.getLoginId().equals(loginId)) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Unauthorized: You can only update your own content.");
        }
        // 수정된 내용으로 업데이트
        existingContent.setLoginId(updatedContent.getLoginId());
        existingContent.setImage(updatedContent.getImage());
        existingContent.setNickName(updatedContent.getNickName());
        existingContent.setText(updatedContent.getText());

        // 업데이트된 컨텐츠 저장
        return contentRepository.save(existingContent);
    }




    // Content ID로 Content를 삭제(숨김 처리)한다
    @Override
    @Transactional
    public void deleteContentById(long id, String loginId) {
        // 컨텐츠 ID로 컨텐츠 찾아 삭제 (숨김 처리 후 Bin에 복사)
        Content contentToDelete = contentRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Content not found with id: " + id));

        // 본인이 작성한 글인지 확인
        if (!contentToDelete.getLoginId().equals(loginId)) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Unauthorized: You can only delete your own content.");
        }

        // 삭제된 컨텐츠를 숨김 처리
        contentToDelete.setHidden(true);
        contentRepository.save(contentToDelete);

        // Bin에 컨텐츠 복사 (삭제가 아니라 숨김 처리)
        Bin bin = new Bin();
        bin.setContent(contentToDelete);
        binRepository.save(bin);

//        // 연결된 Archive도 숨김 처리
//        archiveRepository.findByContent(contentToDelete).forEach(archive -> {
//            archive.setHidden(true);
//            archiveRepository.save(archive);
//        });
    }


    // 모든 숨겨진 Content 목록을 불러온다 (수정 불필요)
    @Override
    public List<Content> getAllHiddenContents() {
        return contentRepository.findByHiddenTrue();
    }

 // Content ID로 Content의 숨김 상태를 수정(숨김 해제)한다
    @Override
    public Content ContentHiddenFalse(long id, boolean hidden) {
        // Content ID로 Content 조회
        Content content = contentRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Content not found with id: " + id));

        // 숨김 상태 업데이트
        content.setHidden(hidden);
        return contentRepository.save(content);
    }


    // ----- Archive 부분 -----

    // Archive를 저장한다
    @Override
    @Transactional
    public Archive saveArchive(long contentId) {
    Content content = contentRepository.findById(contentId).get();
    	System.out.println(content.getLoginId());
    	Archive newArchive = new Archive();
    	newArchive.setContent(content);
    	System.out.println(newArchive.getContent().getId());
        return archiveRepository.save(newArchive);
    }

    // 모든 Archive 항목 조회
    @Override
    public List<Archive> getAllArchives() {
        // 모든 Archive 항목 조회
        return archiveRepository.findAll();
    }

    // 즐겨찾기(보관함) 항목 nickName으로 선택적 조회
    @Override
    public List<Archive> getArchiveByNickName(String nickName) {
        return archiveRepository.findByContent_NickName(nickName);
    }

    // 즐겨찾기(보관함) 항목 archiveID로 선택적으로 해제
    @Override
    @Transactional
    public void removeArchive(long archiveId) {
        Archive archive = archiveRepository.findById(archiveId)
                .orElseThrow(() -> new EntityNotFoundException("Archive not found with id: " + archiveId));

        // 즐겨찾기(보관함)에서 제거
        archiveRepository.delete(archive);
    }

//
//    // 숨김 처리된 Archive 항목 조회
//    @Override
//    public List<Archive> getHiddenArchives() {
//        return archiveRepository.findByHiddenTrue();
//    }
//
//    // 복구된 Archive를 다시 숨김 처리
//    @Override
//    @Transactional
//    public void restoreHiddenArchive(long archiveId) {
//        Archive archive = archiveRepository.findById(archiveId)
//                .orElseThrow(() -> new EntityNotFoundException("Archive not found with id: " + archiveId));
//
//        // Archive를 복구 (숨김 해제)
//        archive.setHidden(false);
//        archiveRepository.save(archive);

//        // Bin에서 해당 Archive 삭제 (복구 시 Bin에서 제거)
//        List<Bin> bins = binRepository.findByArchive(archive);
//        for (Bin bin : bins) {
//            binRepository.delete(bin);
//        }
//    }

    // ----- Bin 부분 -----

    // 모든 Bin 항목 조회
    @Override
    public List<Bin> getAllBins() {
        // 모든 Bin 항목 조회
        return binRepository.findAll();
    }
    
    // Bin로 Content를 복구한다 (숨김 해제)
    @Override
    @Transactional
    public Content restoreContentById(long id) {
//    	id를 사용하여 Bin을 찾음.
    	Bin bin = binRepository.findById(id)
    			 .orElseThrow(() -> new EntityNotFoundException("Bin not found with id: " + id));
//    	찾은 Bin에서 getContent()를 사용하여 해당 Bin에 속한 Content를 가져옴.
    	Content content = bin.getContent(); 
//    	만약 Content가 null이면, 즉, 해당 Bin에 Content가 없다면 EntityNotFoundException을 발생시킴.
        if(content == null)
                throw new EntityNotFoundException("Content not found with id: " + id);

        // Content를 복구 (숨김 해제)
        content.setHidden(false);
        contentRepository.save(content);

        // Bin에서 해당 Content 삭제 (복구 시 Bin에서 제거)
        binRepository.delete(bin);
        // Bin에서 해당 Content 삭제 (복구 시 Bin에서 제거)
//        List<Bin> binsToRemove = binRepository.findByContent(content);
//        for (Bin binToRemove : binsToRemove) {
//            binRepository.delete(binToRemove);
//        }
//        binsToRemove: 이 변수는 binRepository.findByContent(content)를 통해 반환된 List<Bin>을 저장. 즉, content를 포함하는 모든 Bin이 이 리스트에 포함.
//        binToRemove: 이 변수는 binsToRemove 리스트의 각 요소인 개별적인 Bin 객체를 나타냄. for 루프에서 각 반복에서 binToRemove는 리스트에서 하나의 Bin을 가리키게 됨.
//        전체 코드에서 binRepository.delete(binToRemove)은 binToRemove가 현재 반복에서 가리키는 특정 Bin 객체를 삭제하는 데 사용됨. 따라서 for 루프를 통해 binsToRemove 리스트에 있는 모든 Bin 객체를 순회하면서 각각을 삭제. 
//		  이렇게 하면 해당 Content를 포함하는 모든 Bin이 삭제됨.
//
//        간단히 말하면, binsToRemove는 여러 Bin을 저장하는 리스트이고, binToRemove는 각 반복에서 리스트의 한 요소를 가리키는 개별적인 변수입니다.
        return content;
    }


    // 선택한 Content를 Bin에서 영구 삭제 (Content, Archive, Bin에서 모두 삭제)
    // Bin에서 Content ID로 Bin을 삭제한다 (선택적 삭제)
//    @Override
//    public void deleteBinByContentId(long contentId) {
//        binRepository.deleteByContentId(contentId);
//    }

    
    // Bin ID로 Content를 영구삭제한다
    @Override
    @Transactional
    public void permanentlyDeleteContent(long id) { //id를 사용하여 Bin을 찾음.
    	Bin bin = binRepository.findById(id)
		 .orElseThrow(() -> new EntityNotFoundException("Bin not found with id: " + id));
    //찾은 Bin에서 getContent()를 사용하여 해당 Bin에 속한 Content를 가져옴.
    Content content = bin.getContent(); 
    //만약 Content가 null이면, 즉, 해당 Bin에 Content가 없다면 EntityNotFoundException을 발생시킴.
    if(content == null)
       throw new EntityNotFoundException("Content not found with id: " + id);
//    	Content content = contentRepository.findById(id)
//    			.orElseThrow(() -> new EntityNotFoundException("Content not found with id: " + id));
    	
    	// Bin에서 해당 Content 삭제
    	binRepository.delete(bin);
    	
    	// Archive에서 해당 Content 삭제
    	archiveRepository.deleteByContent(content);
    	
    	// Content를 완전히 삭제
    	contentRepository.delete(content);
    }

 // Bin에서 모든 항목을 전체 영구 삭제한다 (Content와 Archive도 함께 삭제)
    @Override
    @Transactional
    public void deleteAllBins() {
        List<Bin> allBins = binRepository.findAll();

        for (Bin bin : allBins) {
            Content content = bin.getContent();
            
            // Content를 완전히 삭제
            contentRepository.delete(content);

            // Archive에서 해당 Content 삭제
            archiveRepository.deleteByContent(content);

            // Bin을 삭제
            binRepository.delete(bin);
        }
    }




}
