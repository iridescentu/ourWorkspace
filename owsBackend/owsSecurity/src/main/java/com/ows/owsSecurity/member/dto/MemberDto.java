package com.ows.owsSecurity.member.dto;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import com.ows.owsSecurity.common.status.Gender;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class MemberDto {

	private long id;
	
	@NotBlank
	private String name;

	@NotBlank
	@Pattern(regexp = "^(MAN|WOMAN)$",
	message = "MAN이나 WOMAN중 하나를 선택해주세요")
	private String gender;
	
	@NotBlank
	@Pattern(regexp = "^([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))$",
	message = "날짜형식(YYYY-MM-DD)을 확인해주세요")
	private String birthDate;
	
	//영어 숫자 상관없이 2~8자까지, 특수문자, 한글 포함안되도록 
	@NotBlank
	@Pattern(regexp = "^[a-zA-Z0-9]{2,8}$",
	message = "특수문자 제외 2~8자 이내로 입력해주세요")
	private String nickName;
	
	@NotBlank
	private String loginId;
	
	@NotBlank
	@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@#$%^&*!])[A-Za-z\\d@#$%^&*!]{8,20}$",
			message = "영문 숫자 특수문자를 포함한 8~20자리로 입력해주세요")
	private String password;
	
	@NotBlank
	@Email
	private String email;

	public MemberDto() {
		super();
	}

	public MemberDto( long id, String name, String gender, String birthDate, String nickName, String loginId, String password, String email) {
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.birthDate = birthDate;
		this.nickName = nickName;
		this.loginId = loginId;
		this.password = password;
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Gender getGender() {
		return Gender.valueOf(gender);
	}

	public void setGender(String gender) {
		this.gender = gender;
	
	}


	public LocalDate getBirthDate() {
		return LocalDate.parse(birthDate, 
				DateTimeFormatter.ofPattern("yyyy-MM-dd"));
	}

	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}

	public String getNickName() {
		return nickName;
	}

	public void setNickName(String nickName) {
		this.nickName = nickName;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getLoginId() {
		return loginId;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}



}
