package com.ows.owsBackEnd.service;

import com.ows.owsBackEnd.model.Archive;
import com.ows.owsBackEnd.model.Bin;
import com.ows.owsBackEnd.model.Content;
import java.util.List;


//Service:
//비즈니스 로직을 정의하고 해당 로직을 수행하는 인터페이스입니다.
//주로 컨트롤러(Controller)와 데이터 액세스 계층(DAO 또는 Repository) 간의 중간 역할을 합니다.
//컨트롤러는 클라이언트의 요청을 받아 이를 처리하기 위해 Service를 호출합니다.
//일반적으로 인터페이스로 정의되며, 여러 구현체를 가질 수 있습니다.

// Content 서비스 관련 인터페이스
public interface OwsService {
    
// ----- Content 부분 -----	
    // Content를 저장한다
    Content saveContent(Content content);

    // 로그인된 사용자의 loginId에 해당하는 모든 컨텐츠를 조회하여 리스트로 반환
    List<Content> getAllContent(String targetId);
    
    //내가 작성한 모든 게시글을 조회할 수 있도록 함.
    List<Content> getMyContentsByAuthorId(String authorId);
    
    //모든 Contents를 불러온다.(관리자)
    List<Content> getAllContentAdmin();

    // ContentId를 사용하여 특정 Content를 조회한다.
    Content getContentById(long id);

//    //nickName으로 content를 조회한다.
//    List<Content> getContentByNickName(String nickName);

    //targetId와 nickName으로 특정한 곳에서 작성된 contents를 조회한다.
	List<Content> findByNickNameAndTargetId(String nickName, String targetId);
    
    // Author ID를 가져와 본인이 작성한 글인지 확인 후 Content ID로 Content를 수정한다
    Content updateContentById(Content content, long id, String authorId);

    // Author ID를 가져와 본인이 작성한 글인지 확인 후 Content ID로 Content를 삭제(숨김 처리)한다
	void deleteContentById(long contentId,String authorId);

// ----- Archive 부분 -----
    // Archive를 저장한다(사용자마다 각각의 Archive에 저장하기 위해 loginId 필요)
    Archive saveArchive(long contentId, String loginId);

    // LoginID로 해당 사용자의 Archive 목록을 불러온다.
    List<Archive> getAllArchivesByUser(String loginId);

    // LoginID로 해당 사용자의 즐겨찾기(보관함) 항목 nickName으로 선택적 조회 
    List<Archive> getArchiveByNickNameUser(String nickName, String loginId);

    // LoginID로 해당 사용자의  즐겨찾기(보관함) 항목 archiveID로 선택적으로 해제
    void removeArchiveUser(long archiveId, String loginId);
    
    // 관리자 권한으로 모든 Archive 항목을 조회한다
    List<Archive> getAllArchives();

    // 관리자 권한으로 Archive 항목을 nickName으로 선택적 조회한다
    List<Archive> getArchiveByNickNameAdmin(String nickName);
    
    // 관리자 권한으로 Archive 항목을 archiveID로 선택적으로 해제한다
    void removeArchiveAdmin(long archiveId);

    
 // ----- Bin 부분 -----   
    // LoginID로 해당 사용자의 Bin 목록을 불러온다
    List<Bin> getAllBinsByUser(String loginId);

    // LoginID로 해당사용자의 Bin에서 contentID를 이용해 선택한 Content를 복구한다 (숨김 해제)(Bin DB에서는 삭제, Content hidden 상태는 true로 변경됨)
    Content restoreContentByIdUser(long contentId, String loginId); // Bin의 id 대신 Content의 id를 사용

    /// LoginID로 해당사용자의 Bin에서 contentID를 이용해 선택한 Content를 영구삭제한다(Bin, Content, Archive DB에서도 완전한 삭제)
    void permanentlyDeleteContentUser(long contentId, String loginId); // Bin의 id 대신 Content의 id를 사용

    // LoginID로 해당사용자의 Bin에서 모든 항목을 전체 영구 삭제한다 (전체 삭제)(Bin, Content, Archive DB에서도 완전한 삭제)
    void deleteAllBinsUser(String loginId);

    // 관리자 권한으로 모든 Bin 목록을 불러온다.
    List<Bin> getAllBins();
    
    //관리자 권한으로 contentID를 이용해 Content를 복구한다 (숨김 해제) (Bin DB에서는 삭제, Content hidden 상태는 true로 변경됨)
    Content restoreContentByIdAdmin(long contentId); // Bin의 id 대신 Content의 id를 사용

    // 관리자 권한으로 contentID를 이용해 Content를 영구삭제한다 (Bin, Content, Archive DB에서도 완전한 삭제)
    void permanentlyDeleteContentAdmin(long contentId); // Bin의 id 대신 Content의 id를 사용

    // 관리자 권한으로 Bin에서 모든 항목을 전체 영구 삭제한다 (전체 삭제) (Bin, Content, Archive DB에서도 완전한 삭제)
    void deleteAllBinsAdmin();


}
