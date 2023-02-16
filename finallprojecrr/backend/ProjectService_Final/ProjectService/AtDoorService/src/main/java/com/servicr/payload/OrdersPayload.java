package com.servicr.payload;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

public class OrdersPayload {

	
	private long orders_id;
	private double amount;
	private String status;
	
	@JsonFormat(pattern = "yyyy-MM-dd")

	private Date orderdate;
	
	private long cust_id;
	
	public OrdersPayload() {
		super();
		// TODO Auto-generated constructor stub
	}

	private long worker_id;
	private String service;

	public OrdersPayload(long orders_id, double amount, String status, Date orderdate, long cust_id, long worker_id,String service) {
		super();
		this.orders_id = orders_id;
		this.amount = amount;
		this.status = status;
		this.orderdate = orderdate;
		this.cust_id = cust_id;
		this.worker_id = worker_id;
		this.service = service;
	}

	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
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

	public long getCust_id() {
		return cust_id;
	}

	public void setCust_id(long cust_id) {
		this.cust_id = cust_id;
	}

	public long getWorker_id() {
		return worker_id;
	}

	public void setWorker_id(long worker_id) {
		this.worker_id = worker_id;
	}
	
	
	
}
