package com.ows.owsSecurity.exception;

public class InvalidInputException extends RuntimeException {

	private String fieldName;
//	private String message;
	
	public InvalidInputException(String fieldName, String message) {
		   
		super(message);
	    this.fieldName = fieldName;
		
//		super();
//		this.fieldName = fieldName;
//		this.message = message;
	}

	public String getFieldName() {
		return fieldName;
	}

	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}

//	public String getMessage() {
//		return message;
//	}
//
//	public void setMessage(String message) {
//		this.message = message;
//	}
//	
}
