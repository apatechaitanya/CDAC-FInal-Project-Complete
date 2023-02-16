package com.DoorStepService.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
@Entity
@Table(name="feedback")
public class Feedback {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long feedback_id;
	@OneToOne(targetEntity = Customers.class)
	@JoinColumn(name="id")
	private Customers customer;
	private String feedback;
	@ManyToOne(targetEntity = Workers.class)
	@JoinColumn(name="worker_id")
	private Workers worker;
	public Feedback() {
		super();
	}
	public Feedback(long feedback_id, Customers customer, String feedback, Workers worker) {
		super();
		this.feedback_id = feedback_id;
		this.customer = customer;
		this.feedback = feedback;
		this.worker = worker;
	}
	public long getFeedback_id() {
		return feedback_id;
	}
	public void setFeedback_id(long feedback_id) {
		this.feedback_id = feedback_id;
	}
	public Customers getCustomer() {
		return customer;
	}
	public void setCustomer(Customers customer) {
		this.customer = customer;
	}
	public String getFeedback() {
		return feedback;
	}
	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	public Workers getWorker() {
		return worker;
	}
	public void setWorker(Workers worker) {
		this.worker = worker;
	}
	
	
}