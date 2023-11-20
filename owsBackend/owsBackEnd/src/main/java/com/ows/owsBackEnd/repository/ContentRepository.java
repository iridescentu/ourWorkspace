package com.ows.owsBackEnd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ows.owsBackEnd.model.Content;

import java.util.List;


public interface ContentRepository extends JpaRepository<Content, Long> {

    // 숨김(hidden) 상태가 아닌 모든 컨텐츠를 검색하는 메소드
    List<Content> findByHiddenFalse();
    
    //숨김(hidden) 상태인 모든 컨텐츠를 검색하는 메소드
    List<Content> findByHiddenTrue();

    // 닉네임으로 content 항목 선택적 조회
    List<Content> findByNickName(String nickName);

    // 특정 Content 엔티티의 ID로 Content를 조회하는 메소드
//    Content findById(long contentId);

    // Content ID로 선택적 조회한 글을 수정
    // Spring Data JPA는 메소드 이름으로 쿼리를 생성해주기 때문에 별도의 쿼리 어노테이션이 필요하지 않습니다.
    // 단, 수정 로직은 Service에서 구현할 것이므로 여기서는 조회만 수행합니다.

    // Content ID로 선택적 조회한 글을 삭제(숨김처리)
    // 숨김 처리를 위해 hidden 필드를 true로 업데이트합니다.
    // Spring Data JPA는 메소드 이름으로 쿼리를 생성해주기 때문에 별도의 쿼리 어노테이션이 필요하지 않습니다.
    // 단, 삭제 로직은 Service에서 구현할 것이므로 여기서는 업데이트만 수행합니다.

    // Content ID로 선택적 조회한 글을 archive에 추가(즐겨찾기 추가)
    // 해당 Content를 즐겨찾기 목록에 추가합니다.
    // Spring Data JPA는 메소드 이름으로 쿼리를 생성해주기 때문에 별도의 쿼리 어노테이션이 필요하지 않습니다.
    // 단, 추가 로직은 Service에서 구현할 것이므로 여기서는 업데이트만 수행합니다.

}
