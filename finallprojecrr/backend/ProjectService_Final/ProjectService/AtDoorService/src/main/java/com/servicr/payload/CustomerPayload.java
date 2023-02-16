package com.servicr.payload;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

public class CustomerPayload {
	
	
	@NotBlank(message = "Fill")
	@Length(min = 3, max = 15, message = "Invalid length of FirstName")
	private String first_name;
	private String last_name;
	
	private String emailId;
	private String password;
	private long mobile;
	
	private String city;
	private String landmark;
	private long pincode;
	
	
	public CustomerPayload(String first_name, String last_name, String emailId, String password, long mobile,
			String city, String landmark, long pincode, String state) {
		super();
		
		this.first_name = first_name;
		this.last_name = last_name;
		this.emailId = emailId;
		this.password = password;
		this.mobile = mobile;
		this.city = city;
		this.landmark = landmark;
		this.pincode = pincode;
		this.state = state;
	}
	
	

	public String getFirst_name() {
		return first_name;
	}
	
	public CustomerPayload() {
		super();
		
	}



	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public long getMobile() {
		return mobile;
	}
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getLandmark() {
		return landmark;
	}
	public void setLandmark(String landmark) {
		this.landmark = landmark;
	}
	public long getPincode() {
		return pincode;
	}
	public void setPincode(long pincode) {
		this.pincode = pincode;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	private String state;
}
