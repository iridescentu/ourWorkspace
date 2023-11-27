package com.ows.owsBackEnd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ows.owsBackEnd.model.Bin;
//import com.ows.owsBackEnd.model.Content;

import java.util.List;
import java.util.Optional;

//// Repository가 데이터베이스 액세스 및 관련된 로직을 처리
public interface BinRepository extends JpaRepository<Bin, Long> {


    // 로그인 아이디로 Bin을 찾아주는 메소드
    // 로그인 아이디를 인자로 받아, 해당 아이디와 연관된 Bin 객체들을 찾아 리스트로 반환합니다.
	List<Bin> findByContent_LoginId(String loginId);
	
    
    // 이 메소드는 Content 객체의 id 값을 인자로 받습니다.
    // 즉, Content의 id 값만 받아 해당 id를 가진 Content와 연관된 Bin 객체들을 찾는 것입니다.
    // Content 엔티티의 ID로 연관된 Bin 목록을 가져오는 메소드
    // Content의 ID를 인자로 받아, 해당 ID를 가진 Content와 연관된 Bin 객체들을 찾아 리스트로 반환합니다.
    List<Bin> findByContentId(Long contentId);
    
    
    // Content의 ID로 Bin을 찾아주는 메소드
    // Content의 ID를 인자로 받아, 해당 ID를 가진 Content와 연관된 Bin 객체를 찾아 Optional로 반환합니다.
    // 이 메소드는 특정 Content와 연관된 Bin 객체가 존재하는지 확인하고, 존재한다면 그 Bin 객체를 반환합니다.
    Optional<Bin> findByContentId(long contentId);


    // contentID로 content를 선택해 삭제할 수 있도록 하는 메소드
    // Content의 ID를 인자로 받아, 해당 ID를 가진 Content와 연관된 Bin 객체를 삭제합니다.
    void deleteByContentId(long contentId);
    

//    // 이 메소드는 Content 객체를 직접 인자로 받습니다. 
//    // 즉, Content 객체 전체를 받아 해당 Content와 연관된 Bin 객체들을 찾는 것입니다.
//    // Content 엔티티로 Bin을 찾아주는 메소드
//    // Content 객체를 인자로 받아, 해당 Content와 연관된 Bin 객체들을 찾아 리스트로 반환합니다.
//    List<Bin> findByContent(Content content);

}
