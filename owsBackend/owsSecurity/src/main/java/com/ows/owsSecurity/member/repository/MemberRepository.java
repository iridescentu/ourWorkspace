package com.ows.owsSecurity.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ows.owsSecurity.member.model.Member;

public interface MemberRepository extends JpaRepository<Member, Long>{

	Member findByLoginId(String loginId);
	
}
