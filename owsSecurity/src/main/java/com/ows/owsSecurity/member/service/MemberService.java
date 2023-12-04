package com.ows.owsSecurity.member.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ows.owsSecurity.exception.InvalidInputException;
import com.ows.owsSecurity.member.dto.MemberDto;
import com.ows.owsSecurity.member.dto.MemberLoginDto;
import com.ows.owsSecurity.member.model.Member;
import com.ows.owsSecurity.member.repository.MemberRepository;

import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.transaction.Transactional;


@Transactional
@Service
public class MemberService {

	private final Logger log = LoggerFactory.getLogger(this.getClass());
	private final MemberRepository memberRepository;
	@Autowired
	public MemberService(MemberRepository memberRepository) {
		super();
		this.memberRepository = memberRepository;
	}
	
	public String signUp(MemberDto memberDto) {
		// ID 중복 검사
		Member member = memberRepository.findByLoginId(memberDto.getLoginId());
		if (member != null) {
			//return "이미 등록된 ID입니다.";
			throw new InvalidInputException("loginId", "이미 등록된 ID입니다.");
		}		
	     member = memberRepository.findByNickName(memberDto.getNickName());
	     if (member != null) {
	         throw new InvalidInputException("nickName", "이미 등록된 닉네임입니다.");}
		// Member 객체 생성
		member = new Member(
				null,
				memberDto.getName(),
				memberDto.getGender(),
				memberDto.getBirthDate(),
				memberDto.getNickName(),
				memberDto.getLoginId(),
				memberDto.getPassword(),
				memberDto.getEmail()
				);		
		// 리포지토리 저장
		memberRepository.save(member);
		return "회원가입이 완료되었습니다.";
	}

	public MemberDto login(MemberLoginDto memberLoginDto) {
	    Member member = memberRepository.findByLoginId(memberLoginDto.getLoginId());
	    if (member != null && member.getPassword().matches(memberLoginDto.getPassword())) {
	        return new MemberDto(member); // 로그인 성공 시 사용자 정보를 MemberDto로 변환하여 반환
	    } else {
	        throw new InvalidInputException("loginId", "ID 또는 Password가 올바르지 않습니다");
	    }
	}
//	public MemberDto login(MemberLoginDto memberLoginDto) {
//	    Member member = memberRepository.findByLoginId(memberLoginDto.getLoginId());
//	    if (member != null && member.getPassword().matches(memberLoginDto.getPassword())) {
//	        return new MemberDto(member); // 로그인 성공 시 사용자 정보를 MemberDto로 변환하여 반환
//	    } else {
//	        throw new InvalidInputException("loginId", "ID 또는 Password가 올바르지 않습니다");
//	    }
//	}
	
//	public String login(MemberLoginDto memberLoginDto) {
//		Member member = memberRepository.findByLoginId(memberLoginDto.getLoginId());
//		 log.info("Fetched member: {}", member);  // member 객체 확인
//		    log.info("Input loginId: {}", memberLoginDto.getLoginId());  // 입력된 loginId 확인
//		if (member != null && member.getPassword().matches(memberLoginDto.getPassword())) {
//    	return "로그인이 완료되었습니다!!!";
//            return member.getLoginId();
//        } else {
//            throw new InvalidInputException("loginId", "ID 또는 Password가 올바르지 않습니다");
//        }
//	}

}
