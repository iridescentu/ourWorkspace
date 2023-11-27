package com.ows.owsBackEnd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ows.owsBackEnd.model.Archive;
import com.ows.owsBackEnd.model.Content;

import java.util.List;
import java.util.Optional;

//Repository가 데이터베이스 액세스 및 관련된 로직을 처리
public interface ArchiveRepository extends JpaRepository<Archive, Long> {

	
	// List<Archive> findByContent(Content content); 라는 메소드는 특정 '콘텐츠'가 저장되어 있는 '아카이브'를 찾는 기능을 함.
	// 예를 들어, '콘텐츠1'이라는 콘텐츠가 '아카이브1', '아카이브2'에 저장되어 있다고 가정해봅시다.
	// 이때 findByContent('콘텐츠1') 메소드를 사용하면, '콘텐츠1'이 저장되어 있는 '아카이브1'과 '아카이브2'를 찾아서 리스트 형태로 반환합니다.
	// 즉, 이 메소드는 특정 콘텐츠가 어떤 아카이브에 저장되어 있는지 알고 싶을 때 사용하는 것입니다.
	// 일반 사용자의 경우: 자신이 저장한 특정 콘텐츠가 어떤 아카이브에 들어있는지 확인할 때 사용할 수 있음. 
	// 예를 들어, 사용자가 '콘텐츠1'이라는 콘텐츠를 여러 아카이브에 저장했다면, '콘텐츠1'이 어떤 아카이브에 저장되어 있는지 알아보려 할 때 이 메소드를 사용.
	// 관리자의 경우: 특정 콘텐츠가 어떤 아카이브에 저장되어 있는지 전체적으로 파악하거나 관리할 때 사용할 수 있음.
	// Content 엔티티로 아카이브를 찾아주는 메소드
	List<Archive> findByContent(Content content);

	//사용자가 본인의 Archive에서 모든 Archive 항목을 조회
	List<Archive> findAllByContent_LoginId(String loginId);
	
	// findByContent(Content content): 특정 콘텐츠가 아카이브에 저장되어 있는지 찾는 메소드. 
	// 사용자나 관리자가 특정 콘텐츠가 아카이브에 저장되었는지 확인할 때 사용할 수 있습니다.
    // 로그인 아이디로 아카이브를 찾아주는 메소드
    List<Archive> findByContent_LoginId(String loginId);
    
    
    // deleteByContent(Content content): 특정 콘텐츠를 아카이브에서 삭제하는 메소드.
    // 사용자가 자신의 콘텐츠를 아카이브에서 삭제하거나, 관리자가 특정 콘텐츠를 아카이브에서 삭제할 때 사용 가능.
    // Bin에서 삭제할 경우 Archive에서 해당 Content 삭제
    List<Archive> deleteByContent(Content content);
    
    // findByContent_NickName(String nickName): 특정 닉네임을 가진 콘텐츠가 아카이브에 저장되어 있는지 찾는 메소드.
    // 사용자나 관리자가 특정 닉네임을 가진 콘텐츠가 아카이브에 저장되었는지 확인할 때 사용할 수 있음.
    // 즐겨찾기(보관함) 항목 nickName으로 찾기(content에 있는 nickName)
    List<Archive> findByContent_NickName(String nickName);
	
    
    // Archive ID에 해당하는 Archive 삭제(eleteById 메소드는 주어진 ID에 해당하는 엔티티를 삭제) 
    void deleteById(long archiveId);
    
    // 관리자 권한으로 모든 Archive 항목 조회
    List<Archive> findAll();

    // 관리자 권한으로 Archive 항목을 archiveID로 선택적 조회
    Optional<Archive> findById(Long id);


}
