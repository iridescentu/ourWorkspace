package com.ows.owsSecurity.common.status;

public enum ResultCode {

	SUCCESS("정상 처리되었습니다"),
	ERROR("에러가 발생했습니다"),
	FAILED("실패했습니다"); // 새로운 상수 추가
	private final String msg;

	private  ResultCode(String msg) {
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}
	
}
