package com.DoorStepService.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

@Entity
@Table(name="customers")
public class Customers {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long cust_id;
	@NotBlank
	@Length(min = 3, max = 15, message = "Invalid length of FirstName")
	private String first_name;
	private String last_name;
	
	@Column(unique=true)
	private String emailId;
	private String password;
	private long mobile;
	
	//@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL,targetEntity = Address.class)
	@JoinColumn(name = "address_id")
	private Address address;
	
	//@JsonIgnore    
	//@OneToMany(targetEntity = Orders.class,cascade = CascadeType.ALL)
//	@JoinColumn(name="orders_id",foreignKey = @javax.persistence.ForeignKey(name = "none"))
	
//	@OneToMany(mappedBy="customer",targetEntity = Orders.class)
//	private List<Orders> orders;
	
	public long getCust_id() {
		return cust_id;
	}
	public void setCust_id(long cust_id) {
		this.cust_id = cust_id;
	}
//	public List<Orders> getOrders() {
//		return orders;
//	}
//	public void setOrders(List<Orders> orders) {
//		this.orders = orders;
//	}
	public Customers() {
		super();
	}
	public Customers(long cust_id, String first_name, String last_name, String emailId, String password, long mobile,
			Address address) {
		super();
		this.cust_id = cust_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.emailId = emailId;
		this.password = password;
		this.mobile = mobile;
		this.address = address;
		
	}
	public long getId() {
		return cust_id;
	}
	public void setId(long cust_id) {
		this.cust_id = cust_id;
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
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
}