package com.wecodee.flipcart.dto;

public class CommonResponse
{
  private EnumData response;
  
  private String message;
  
  public CommonResponse() 
  {
	  
  }

  public CommonResponse(EnumData response, String message) {
	super();
	this.response = response;
	this.message = message;
  }

  public EnumData getResponse() {
	return response;
  }

  public void setResponse(EnumData response) {
	this.response = response;
  }

  public String getMessage() {
	return message;
  }

  public void setMessage(String message) {
	this.message = message;
  }

  @Override
  public String toString() {
	return "CommonResponse [response=" + response + ", message=" + message + "]";
  }
  
}
