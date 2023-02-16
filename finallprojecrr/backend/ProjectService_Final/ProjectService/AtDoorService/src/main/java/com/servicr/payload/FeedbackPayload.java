package com.servicr.payload;

import com.DoorStepService.model.Customers;
import com.DoorStepService.model.Workers;

public class FeedbackPayload {
	public FeedbackPayload() {
		super();
		// TODO Auto-generated constructor stub
	}
	private long feedback_id;
	
	private String feedback;
	private long cust_id;
	private long worker_id;
	
	
	public FeedbackPayload(long feedback_id, String feedback, long cust_id, long worker_id) {
		super();
		this.feedback_id = feedback_id;
		this.feedback = feedback;
		this.cust_id = cust_id;
		this.worker_id = worker_id;
	}
	public long getFeedback_id() {
		return feedback_id;
	}
	public void setFeedback_id(long feedback_id) {
		this.feedback_id = feedback_id;
	}
	public String getFeedback() {
		return feedback;
	}
	public void setFeedback(String feedback) {
		this.feedback = feedback;
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
