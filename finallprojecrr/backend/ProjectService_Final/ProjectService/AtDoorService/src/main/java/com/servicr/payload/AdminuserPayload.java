package com.servicr.payload;

public class AdminuserPayload {

	
	private String username;
	private String password;
	private String emailId;
	private long mobileno;
	
	private String city;
	private String landmark;
	private long pincode;
	private String state;
	
	public AdminuserPayload(String username, String password, String emailId, long mobileno, String city,
			String landmark, long pincode, String state) {
		
		super();
		this.username = username;
		this.password = password;
		this.emailId = emailId;
		this.mobileno = mobileno;
		this.city = city;
		this.landmark = landmark;
		this.pincode = pincode;
		this.state = state;
	}
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public long getMobileno() {
		return mobileno;
	}

	public void setMobileno(long mobileno) {
		this.mobileno = mobileno;
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

	
	
	
	
}
