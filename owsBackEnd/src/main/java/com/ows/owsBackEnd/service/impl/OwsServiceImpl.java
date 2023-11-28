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

import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


//ServiceImpl:
//Service 인터페이스를 구현한 구현체입니다.
//비즈니스 로직을 실제로 구현하고, 데이터 액세스나 다른 비즈니스 로직을 호출하여 기능을 수행합니다.
//주로 Service 인터페이스의 메서드를 구체적으로 구현합니다.
//Spring에서는 주로 ServiceImpl 클래스에 @Service 어노테이션을 붙여서 이 클래스가 Spring의 서비스로 등록되도록 합니다.

@Service
public class OwsServiceImpl implements OwsService {

	
	 private static final Logger logger = LoggerFactory.getLogger(OwsServiceImpl.class);

	 
	 
    private final ContentRepository contentRepository;
    private final ArchiveRepository archiveRepository;
    private final BinRepository binRepository;
//    @PersistenceContext
//    private EntityManager entityManager;

    @Autowired //생성자 기반의 의존성 주입을 사용 (ContentRepository, ArchiveRepository, 및 BinRepository의 인스턴스를 주입)
    public OwsServiceImpl(ContentRepository contentRepository, ArchiveRepository archiveRepository, BinRepository binRepository) {
        this.contentRepository = contentRepository;
        this.archiveRepository = archiveRepository;
        this.binRepository = binRepository;
    }

    // ----- Content 부분 -----

    // Content를 저장한다
    @Override
    public Content saveContent(Content content) {
        // contentRepository를 사용하여 컨텐츠를 저장
        return contentRepository.save(content);
    }

    //모든 Content를 불러온다.(관리자)
    @Override
    public List<Content> getAllContentAdmin(){
    	// contentRepository를 사용하여 모든 컨텐츠를 가져옴.
    	return contentRepository.findAll();
    }
    
    // contentRepository를 사용하여 모든 컨텐츠를 가져옴.(사용자)
    @Override
    public List<Content> getAllContent(String targetId) {
    	   //login된 Id의 content list만 불러오기
        return contentRepository.findAllBytargetId(targetId);
    }
    
    // authorId를 받아와 내가 작성한 글만 모아봄.
    @Override
    public List<Content> getMyContentsByAuthorId(String authorId) {
    	return contentRepository.getMyContentsByAuthorId(authorId);
    }
    
    	
    // Content ID로 특정 Content를 불러온다
    @Override
    public Content getContentById(long id) {
        // contentRepository를 사용하여 특정 ID의 컨텐츠를 가져옴. 컨텐츠를 찾지 못한 경우에 대한 예외 처리도 포함
    	return contentRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Content not found with id: " + id));
    }
    
//    // NickName으로 Content 선택적 조회
//    @Override
//    public List<Content> getContentByNickName(String nickName) {
//    	// contentRepository를 사용하여 닉네임으로 컨텐츠를 가져옴.
//        return contentRepository.findByNickName(nickName);
//    }

    //targetId와 nickName으로 특정한 곳에서 작성된 contents를 조회한다.
    @Override
    public List<Content> findByNickNameAndTargetId(String nickName, String targetId){
    	
    	 logger.info("findByNickNameAndTargetId method called with targetId: {} and nickName: {}", targetId, nickName);
    	 List<Content> result = contentRepository.findByNickNameAndTargetId(targetId, nickName);

         logger.info("findByNickNameAndTargetId method result: {}", result);

         return result;
//    	return contentRepository.getContentByNickNameAndTargetId(targetId, nickName);
    }
    
    @Override //사용자가 해당 작업에 대한 권한이 있는지 확인한 후 ContentID로 컨텐츠를 업데이트
    public Content updateContentById(Content updatedContent, long id, String authorId) {
        // 컨텐츠 ID로 기존 컨텐츠를 찾아 수정
        Content existingContent = contentRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Content not found with id: " + id));

        // 본인이 작성한 글인지 확인
        if (!existingContent.getAuthorId().equals(authorId)) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Unauthorized: You can only update your own content.");
        }
        // 수정된 내용으로 업데이트
        existingContent.setAuthorId(updatedContent.getAuthorId());
        existingContent.setImage(updatedContent.getImage());
        existingContent.setNickName(updatedContent.getNickName());
        existingContent.setText(updatedContent.getText());

        // 업데이트된 컨텐츠 저장
        return contentRepository.save(existingContent);
    }




    // Content ID로 Content를 삭제(숨김 처리)한다
    @Override
    @Transactional
    public void deleteContentById(long contentId, String authorId) {
        // Bin에서 해당 ContentID를 가진 데이터 조회
        Optional<Bin> existingBin = binRepository.findByContentId(contentId);

        // Bin에 이미 있는 경우 예외 처리 또는 원하는 대응 방법을 선택할 수 있습니다.
        if (existingBin.isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Content is already in Bin.");
        }

        // Bin에 없는 경우, 삭제 및 숨김 처리 수행
        Content contentToDelete = contentRepository.findById(contentId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Content not found with id: " + contentId));

        // 본인이 작성한 글인지 확인
        if (!contentToDelete.getAuthorId().equals(authorId)) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Unauthorized: You can only delete your own content.");
        }

        // 삭제된 컨텐츠를 숨김 처리
        contentToDelete.setHidden(true);
        contentRepository.save(contentToDelete);

        // Bin에 컨텐츠 복사 (삭제가 아니라 숨김 처리)
        Bin bin = new Bin();
        bin.setContent(contentToDelete);
        binRepository.save(bin);
    }



//    // 모든 숨겨진 Content 목록을 불러온다 (수정 불필요)
//    @Override
//    public List<Content> getAllHiddenContents() {
//        return contentRepository.findByHiddenTrue();
//    }

// // Content ID로 Content의 숨김 상태를 수정(숨김 해제)한다
//    @Override
//    public Content ContentHiddenFalse(long id, boolean hidden) {
//        // Content ID로 Content 조회
//        Content content = contentRepository.findById(id)
//                .orElseThrow(() -> new EntityNotFoundException("Content not found with id: " + id));
//
//        // 숨김 상태 업데이트
//        content.setHidden(hidden);
//        return contentRepository.save(content);
//    }


 // ----- Archive 부분 -----

    // Archive를 저장한다
    @Override
    @Transactional
    public Archive saveArchive(long contentId, String loginId) {
        Content content = contentRepository.findById(contentId).get();

        // 본인의 아카이브인지 확인
        if (!content.getLoginId().equals(loginId)) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Unauthorized: You can only save, view, and delete your archive.");
        }
        //새 Archive 객체를 만들고 archiveRepository를 사용하여 아카이브를 저장
        Archive newArchive = new Archive();
        newArchive.setContent(content);
        return archiveRepository.save(newArchive);
    }

    // 사용자권한으로 자신의 모든 Archive 항목 조회
    @Override
    public List<Archive> getAllArchivesByUser(String loginId) {
    	// 특정 사용자의 모든 아카이브를 archiveRepository를 사용하여 가져옴
        return archiveRepository.findAllByContent_LoginId(loginId);
    }


    // 사용자 권한으로 자신의 Archive 항목 nickName으로 선택적 조회
    @Override
    public List<Archive> getArchiveByNickNameUser(String nickName, String loginId) {
        List<Archive> archives = archiveRepository.findByContent_NickName(nickName);
        archives.removeIf(archive -> !archive.getContent().getLoginId().equals(loginId));
        // 특정 사용자의 닉네임으로 아카이브를 가져옴. archiveRepository를 사용
        return archives;
    }


    // 사용자 권한으로 자신의 Archive에서 ArchiveID로 선택적 해제
    @Override
    @Transactional
    public void removeArchiveUser(long archiveId, String loginId) {
        Archive archive = archiveRepository.findById(archiveId)
                .orElseThrow(() -> new EntityNotFoundException("Archive not found with id: " + archiveId));
        if (!archive.getContent().getLoginId().equals(loginId)) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Unauthorized: You can only remove your own archive.");
        }
        //delete 메소드는 주어진 엔티티를 삭제
        archiveRepository.delete(archive);
    }
    
    
    // 관리자 권한으로 모든 Archive 항목 조회
    @Override
    public List<Archive> getAllArchives() {
    	return archiveRepository.findAll();
    }
    
    // 관리자 권한으로 Archive 항목 nickName으로 선택적 조회
    @Override
    public List<Archive> getArchiveByNickNameAdmin(String nickName) {
    	//닉네임으로 모든 사용자의 아카이브를 가져옴. archiveRepository를 사용
    	return archiveRepository.findByContent_NickName(nickName);
    }

    // 관리자 권한으로 ArchiveID로 선택적 해제
    @Override
    @Transactional
    public void removeArchiveAdmin(long archiveId) {
    	Archive archive = archiveRepository.findById(archiveId)
    			.orElseThrow(() -> new EntityNotFoundException("Archive not found with id: " + archiveId));
    	archiveRepository.delete(archive);
    }

    // ----- Bin 부분 -----

    
    // 사용자 권한으로 자신의 모든 Bin 항목 조회
    @Override
    public List<Bin> getAllBinsByUser(String loginId) {
        return binRepository.findByContent_LoginId(loginId);
    }
    
    // 사용자 권한으로 자신의 Bin에서 ContentID로 Content를 복구 (숨김해제)
    @Override
    @Transactional
    public Content restoreContentByIdUser(long contentId, String loginId) {
    	// 권한 확인 후 휴지통에서 컨텐츠를 복원하고 숨김을 해제
        Bin bin = binRepository.findByContentId(contentId)
                .orElseThrow(() -> new EntityNotFoundException("Bin not found with contentId: " + contentId));
//    	찾은 Bin에서 getContent()를 사용하여 해당 Bin에 속한 Content를 가져옴.
    	Content content = bin.getContent(); 
//    	만약 Content가 null이면, 즉, 해당 Bin에 Content가 없다면 EntityNotFoundException을 발생시킴.
        if(content == null)
                throw new EntityNotFoundException("Content not found with id: " + contentId);

        // Content를 복구 (숨김 해제)
        content.setHidden(false);
        contentRepository.save(content);

        // Bin에서 해당 Content 삭제 (복구 시 Bin에서 제거)
        binRepository.delete(bin);
        
        return content; // 반환할 Content 객체
    }
    
    
    // 사용자 권한으로 자신의 Bin에서 ContentID로 Content를 영구 삭제
    @Override
    @Transactional
    public void permanentlyDeleteContentUser(long contentId, String loginId) {
    	//권한 확인 후 휴지통에서 컨텐츠를 완전히 삭제하고 연관된 아카이브도 삭제
        Bin bin = binRepository.findByContentId(contentId)
                .orElseThrow(() -> new EntityNotFoundException("Bin not found with contentId: " + contentId));
        Content content = bin.getContent();
        //만약 Content가 null이면, 즉, 해당 Bin에 Content가 없다면 EntityNotFoundException을 발생시킴.
        if(content == null) {
            throw new EntityNotFoundException("Content not found with id: " + contentId);
        }
        // Content를 완전히 삭제
        contentRepository.delete(content); 

        // Bin에서 해당 Content를 삭제
        binRepository.delete(bin);

            // Archive에서 해당 Content 삭제(Content에서 삭제나 복구가 적용되면 archive에서도 바로 연계되므로 현재는 해당 코드를 사용하지 않는다.)
            //archiveRepository.deleteByContent(content);
        }
    	
    // 사용자 권한으로 자신의 Bin에서 모든 항목을 전체 영구 삭제
    @Override
    @Transactional
    public void deleteAllBinsUser(String loginId) {
    	// 특정 사용자의 모든 휴지통을 영구적으로 삭제하고 연관된 컨텐츠 및 아카이브도 삭제
    	List<Bin> bins = binRepository.findByContent_LoginId(loginId);;
    	for (Bin bin : bins) {  
    		Content content = bin.getContent();
    		
    		// Content를 완전히 삭제
    		contentRepository.delete(content);
    		
//    		// Archive에서 해당 Content 삭제
//    		archiveRepository.deleteByContent(content);
    		
    		// Bin을 삭제
    		binRepository.delete(bin);
    	}
    }
        
        
        // 관리자 권한으로 모든 Bin 항목 조회
        @Override
        public List<Bin> getAllBins() {
        	return binRepository.findAll();
        }
        // 관리자 권한으로 Bin에서 ContentID로 Content를 복구 (숨김해제)
        @Override
        @Transactional
        public Content restoreContentByIdAdmin(long contentId) {
//    	contentId를 사용하여 bin에서 해당 content를 찾음.
        	Bin bin = binRepository.findByContentId(contentId)
        			.orElseThrow(() -> new EntityNotFoundException("Bin not found with contentId: " + contentId));
//    	찾은 Bin에서 getContent()를 사용하여 해당 Bin에 속한 Content를 가져옴.
        	Content content = bin.getContent(); 
//    	만약 Content가 null이면, 즉, 해당 Bin에 Content가 없다면 EntityNotFoundException을 발생시킴.
        	if(content == null)
        		throw new EntityNotFoundException("Content not found with id: " + contentId);
        	
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
//        간단히 말하면, binsToRemove는 여러 Bin을 저장하는 리스트이고, binToRemove는 각 반복에서 리스트의 한 요소를 가리키는 개별적인 변수임.
        	return content;
        }
        
        // 관리자 권한으로 Bin에서 ContentID로 Content를 영구 삭제
        @Override
        @Transactional
        public void permanentlyDeleteContentAdmin(long contentId) {
        	//만약 Content가 null이면, 즉, 해당 Bin에 Content가 없다면 EntityNotFoundException을 발생시킴.
        	 Bin bin = binRepository.findByContentId(contentId)
        	            .orElseThrow(() -> new EntityNotFoundException("Bin not found with contentId: " + contentId));
        	    Content content = bin.getContent();
//    if(content == null)
//       throw new EntityNotFoundException("Content not found with id: " + id);
//    	Content content = contentRepository.findById(id)
//    			.orElseThrow(() -> new EntityNotFoundException("Content not found with id: " + id));
        	
        	// Bin에서 해당 Content 삭제
        	binRepository.delete(bin);
        	
//        	// Archive에서 해당 Content 삭제
//        	archiveRepository.deleteByContent(content);
//        	
        	// Content를 완전히 삭제
        	contentRepository.delete(content);
        }
        
        // 관리자 권한으로 Bin에서 모든 항목을 전체 영구 삭제 (Content와 Archive도 함께 삭제)
        @Override
        @Transactional
        public void deleteAllBinsAdmin() {
        	List<Bin> allBins = binRepository.findAll();
        	
        	for (Bin bin : allBins) {
        		Content content = bin.getContent();
        		
        		// Content를 완전히 삭제
        		contentRepository.delete(content);
        		
        		//  JPA에서 제공하는 Cascade 옵션을 사용하였기 때문에 부모 엔티티가 변경될 때 연관된 자식 엔티티에도 변경이 자동으로 전파되는 기능을 활용할 수 있음. 
        		// Content 엔티티가 삭제될 때 관련된 Archive 엔티티도 자동으로 삭제됨.
        		// 이 경우 별도로 archiveRepository.deleteByContent(content);를 호출할 필요가 없게 되어 주석처리.
        		//        		// Archive에서 해당 Content 삭제
        		// archiveRepository.deleteByContent(content);
        		
        		// Bin을 삭제
        		binRepository.delete(bin);
        	}
    }




}
