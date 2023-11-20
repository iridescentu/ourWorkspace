package com.ows.owsBackEnd.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.ows.owsBackEnd.model.Archive;
import com.ows.owsBackEnd.model.Content;

import java.util.List;

public interface ArchiveRepository extends JpaRepository<Archive, Long> {

//    // 로그인 아이디로 아카이브를 찾아주는 메소드
//    List<Archive> findByLoginId(String loginId);

    // Content 엔티티로 아카이브를 찾아주는 메소드
    // 특정 Content 엔티티에 연관된 Archive를 조회할 수 있습니다.
    // Content 엔티티의 ID(기본 키)를 기반으로 해당 Content와 관련된 모든 Archive를 검색하게 됩니다.
    List<Archive> findByContent(Content content);
    
    // Bin에서 삭제할 경우 Archive에서 해당 Content 삭제
    List<Archive> deleteByContent(Content content);
    
 // 즐겨찾기(보관함) 항목 nickName으로 찾기(content에 있는 nickName)
	List<Archive> findByContent_NickName(String nickName);
	
	

}
