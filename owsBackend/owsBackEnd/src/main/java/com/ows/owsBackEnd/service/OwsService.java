package com.ows.owsBackEnd.service;

import com.ows.owsBackEnd.model.Archive;
import com.ows.owsBackEnd.model.Bin;
import com.ows.owsBackEnd.model.Content;

import java.util.List;

// Content 서비스 관련 인터페이스
public interface OwsService {

    // Content를 저장한다
    Content saveContent(Content content);

    // 모든 Content를 불러온다
    List<Content> getAllContents();

    // Content ID로 특정 Content를 불러온다
    Content getContentById(long id);

    //nickName으로 content를 조회한다.
    List<Content> getContentByNickName(String nickName);
    
    // Login ID를 가져와 본인이 작성한 글인지 확인 후 Content ID로 Content를 수정한다
    Content updateContentById(Content content, long id, String loginId);

    // Login ID를 가져와 본인이 작성한 글인지 확인 후 Content ID로 Content를 삭제(숨김 처리)한다
    void deleteContentById(long id, String loginId);

    // 숨겨진 모든 Content 목록을 불러온다
    List<Content> getAllHiddenContents();

    // Content ID로 Content의 숨김 상태를 수정(숨김 해제)한다
    Content ContentHiddenFalse(long id, boolean hidden);

    // Archive를 저장한다
    Archive saveArchive(long contentId);

    // 모든 Archive 항목 조회
    List<Archive> getAllArchives();

//    // 로그인 아이디로 해당 사용자의 Archive 목록을 불러온다
//    List<Archive> getArchivesByLoginId(String loginId);

 // 즐겨찾기(보관함) 항목 nickName으로 선택적 조회
    List<Archive> getArchiveByNickName(String nickName);

    // 즐겨찾기(보관함) 항목 archiveID로 선택적으로 해제
    void removeArchive(long archiveId);
    
    // 모든 Bin을 불러온다
    List<Bin> getAllBins();

    // Bin ID로 Content를 복구한다 (숨김 해제)
    Content restoreContentById(long id);
    
    // Bin ID로 Content를 영구삭제한다 
    void permanentlyDeleteContent(long id);

    // Bin에서 모든 항목을 전체 영구 삭제한다 (전체 삭제)
    void deleteAllBins();


    

}
