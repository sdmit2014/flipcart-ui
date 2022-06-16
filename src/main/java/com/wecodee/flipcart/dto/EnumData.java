package com.wecodee.flipcart.dto;

public enum EnumData {

	SUCCESS("SUCCESS"), FAILED("FAILED");

	private String status;

	private EnumData(String status) {
		this.status = status;
	}

	public String getStatus() {
		return status;
	}
}
