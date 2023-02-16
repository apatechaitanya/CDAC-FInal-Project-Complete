package com.servicr.payload;

public class WorkerPayload {
	
	private long worker_id;
	private String first_name;
	private String last_name;
	private String emailId;
	private String password;
	private long mobile;
	private String verified;
	
	private String city;
	private String landmark;
	private long pincode;
	private String state;
	
	private long prof_id;
	private String available;
//	private String prof_name;
//	private Double basic_charges;
	
	
	public WorkerPayload() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public WorkerPayload(long worker_id,String first_name, String last_name, String emailId,String password ,long mobile, String verified,
			String city, String landmark, long pincode,String state,long prof_id,String available) {
		super();
		this.worker_id = worker_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.emailId = emailId;
		this.password = password;
		this.mobile = mobile;
		this.verified = verified;
		this.city = city;
		this.landmark = landmark;
		this.pincode = pincode;
		this.state = state;
		this.prof_id = prof_id;
		this.available=available;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getWorker_id() {
		return worker_id;
	}

	public void setWorker_id(long worker_id) {
		this.worker_id = worker_id;
	}

	public long getProf_id() {
		return prof_id;
	}

	public void setProf_id(long prof_id) {
		this.prof_id = prof_id;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getFirst_name() {
		return first_name;
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
	public long getMobile() {
		return mobile;
	}
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	public String getVerified() {
		return verified;
	}
	public void setVerified(String verified) {
		this.verified = verified;
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

	public String getAvailable() {
		return available;
	}

	public void setAvailable(String available) {
		this.available = available;
	}
	
	
}
