package com.DoorStepService.model;


import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name="orders")
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long orders_id;
	private double amount;
	private String status;
	@JsonFormat(pattern = "yyyy-MM-dd")

	private Date orderdate;
	
	 
//	@JsonIgnore
//	@ManyToOne( targetEntity = Customers.class)
//	@JoinColumn(name="cust_id")
	
	
	@ManyToOne
	@JoinColumn(name="cust_id",nullable=true)
	private Customers customer;
	
	// @JsonFormat(with = JsonFormat.Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
	// @JsonFormat(shape = JsonFormat.Shape.ARRAY)
//	@JsonIgnore
	
	
	
	//@ManyToOne(targetEntity = Workers.class)
	 //@JoinColumn(name="worker_id")
	@ManyToOne
	@JoinColumn(name="worker_id",nullable=true)
	private Workers workers;
	
	private String service;
	 
	
	public Orders(long orders_id, double amount, String status, Date orderdate, Customers customer,
			Workers workers,String service) {
		super();
		this.orders_id = orders_id;
		this.amount = amount;
		this.status = status;
		this.orderdate = orderdate;
		this.customer = customer;
     	this.workers = workers;
     	this.service = service;
	}
	public Orders() {
		super();
		// TODO Auto-generated constructor stub
	}
	public long getOrders_id() {
		return orders_id;
	}
	public void setOrders_id(long orders_id) {
		this.orders_id = orders_id;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Date getOrderdate() {
		return orderdate;
	}
	public void setOrderdate(Date orderdate) {
		this.orderdate = orderdate;
	}
	public Customers getCustomer() {
		return customer;
	}
	@Override
	public String toString() {
		return "Orders [orders_id=" + orders_id + ", amount=" + amount + ", status=" + status + ", orderdate="
				+ orderdate + ", customer=" + customer + ", workers=" + workers + ", service="+service+ "]";
	}
	public void setCustomer(Customers customer) {
		this.customer = customer;
	}
	public Workers getWorkers() {
		return workers;
	}
	public void setWorkers (Workers workers) {
		this.workers = workers;
	}
	public String getService() {
		return service;
	}
	public void setService(String service) {
		this.service = service;
	}
	
	
}