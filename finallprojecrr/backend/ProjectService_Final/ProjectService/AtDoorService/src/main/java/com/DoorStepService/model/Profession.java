package com.DoorStepService.model;


import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="profession")
public class Profession {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long prof_id;
	private String prof_name;
	private Double basic_charges;
	/*@OneToMany
	@JoinColumn(name="worker_id")
	private List<Workers> workers;*/
	

	public Profession() {
		super();
	}


	public Profession(long prof_id, String prof_name, Double basic_charges
			) {
		super();
		this.prof_id = prof_id;
		this.prof_name = prof_name;
		this.basic_charges = basic_charges;
//		this.workers = workers;
	}


	public long getProf_id() {
		return prof_id;
	}


	public void setProf_id(long prof_id) {
		this.prof_id = prof_id;
	}


	public String getProf_name() {
		return prof_name;
	}


	public void setProf_name(String prof_name) {
		this.prof_name = prof_name;
	}


	public Double getBasic_charges() {
		return basic_charges;
	}


	public void setBasic_charges(Double basic_charges) {
		this.basic_charges = basic_charges;
	}


/*	public List<Workers> getWorkers() {
		return workers;
	}


	public void setWorkers(List<Workers> workers) {
		this.workers = workers;
	}
	*/
	
}