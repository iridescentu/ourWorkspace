package com.ows.owsBackEnd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ows.owsBackEnd.model.Bin;
import com.ows.owsBackEnd.model.Content;

import java.util.List;

public interface BinRepository extends JpaRepository<Bin, Long> {

//    // 로그인 아이디로 빈을 찾아주는 메소드
//    List<Bin> findByLoginId(String loginId);

    // Content 엔티티로 빈을 찾아주는 메소드
    List<Bin> findByContent(Content content);

    // Content 엔티티의 ID로 연관된 Bin 목록을 가져오는 메소드
    List<Bin> findByContentId(Long contentId);

//    //content를 삭제할 수 있도록 하는 메소드
//	void deleteByContent(Content content);

//	//contentID로 content를 선택해 삭제할 수 있도록 하는 메소드
//	void deleteByContentId(long contentId);
}
