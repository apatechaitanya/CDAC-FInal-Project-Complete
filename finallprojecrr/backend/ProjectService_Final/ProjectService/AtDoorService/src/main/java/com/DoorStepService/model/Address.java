package com.DoorStepService.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="address")
public class Address {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long address_id;
	
	private String city;
	
	private String landmark;
	
	private long pincode;
	
	private String state;
	
	public Address(long address_id, String city, String landmark, long pincode, String state) {
		super();
		this.address_id = address_id;
		this.city = city;
		this.landmark = landmark;
		this.pincode = pincode;
		this.state = state;
		
	}
	public Address() {
		super();
	}
	
	public long getId() {
		return address_id;
	}
	public long getAddress_id() {
		return address_id;
	}
	public void setAddress_id(long address_id) {
		this.address_id = address_id;
	}
	
	
	public void setId(long id) {
		this.address_id = id;
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