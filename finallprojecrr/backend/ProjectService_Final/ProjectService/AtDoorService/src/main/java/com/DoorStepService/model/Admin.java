package com.DoorStepService.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="admin")
public class Admin {
	@Id
	private String username;
	private String password;
	@Column(unique=true)
	private String emailId;
	private long mobileno;
	@OneToOne(cascade = CascadeType.ALL,targetEntity = Address.class)
	@JoinColumn(name = "address_id")
	private Address address;
	
	
	public Admin(String username, String password, String emailId, long mobileno,Address address) {
		super();
		
		this.username = username;
		this.password = password;
		this.setEmailId(emailId);
		this.setMobileno(mobileno);
		this.address=address;
	}

	public Admin() {
		super();
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
	
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	
	
}