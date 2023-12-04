package com.ows.owsSecurity.member.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ows.owsSecurity.common.dto.BaseResponse;
import com.ows.owsSecurity.common.status.ResultCode;
import com.ows.owsSecurity.member.dto.MemberDto;
import com.ows.owsSecurity.member.dto.MemberLoginDto;
import com.ows.owsSecurity.member.service.MemberService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/universe/member")
@CrossOrigin(origins="http://localhost:3000", 
	methods= {RequestMethod.GET, RequestMethod.POST})
public class MemberController {
	private MemberService memberService;
	@Autowired
	public MemberController(MemberService memberService) {
		super();
		this.memberService = memberService;
	}
	
	@PostMapping("signup")
	public ResponseEntity<BaseResponse<Void>> signUp(@RequestBody @Valid MemberDto memberDto) {
		return new ResponseEntity<BaseResponse<Void>>(
				new BaseResponse<Void>(ResultCode.SUCCESS.name(),
				null,
				memberService.signUp(memberDto)),
				HttpStatus.CREATED);
	}
	
//	@PostMapping("login")
//	public ResponseEntity<BaseResponse<MemberDto>> login(@RequestBody @Valid MemberLoginDto memberLoginDto) {
//	    MemberDto memberDto = memberService.login(memberLoginDto); // 로그인 시 반환된 사용자 정보
//	    return new ResponseEntity<>(new BaseResponse<MemberDto>(
//	            ResultCode.SUCCESS.name(), 
//	            memberDto, // 사용자 정보를 응답에 담음
//	            null), 
//	            HttpStatus.OK) ;
//	}

//	@PostMapping("login")
//    public ResponseEntity<BaseResponse<Void>> login(@RequestBody @Valid MemberLoginDto memberLoginDto) {
//		return new ResponseEntity<>(new BaseResponse<Void>(
//       		ResultCode.SUCCESS.name(), 
//       		null, 
//       		memberService.login(memberLoginDto)), 
//      		HttpStatus.OK) ;
//	}

	@PostMapping("login")
	public ResponseEntity<BaseResponse<MemberDto>> login(@RequestBody @Valid MemberLoginDto memberLoginDto) {
	    MemberDto memberDto = memberService.login(memberLoginDto);

	    if (memberDto != null) {
	        // 로그인 성공 시, targetId를 응답에 추가
	        memberDto.setTargetId(memberDto.getLoginId());
	        return new ResponseEntity<>(new BaseResponse<MemberDto>(
	                ResultCode.SUCCESS.name(),
	                memberDto,
	                null),
	                HttpStatus.OK);
	    } else {
	        // 로그인 실패 시
	        return new ResponseEntity<>(new BaseResponse<>(ResultCode.ERROR.name(), null, "로그인 실패"), HttpStatus.BAD_REQUEST);
	    }
	}
}

