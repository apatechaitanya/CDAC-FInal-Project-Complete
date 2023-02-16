package com.service.Dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.DoorStepService.model.Customers;



@Repository
public interface CustomerDao extends JpaRepository<Customers,Long>{
	
	@Query("select u from Customers u where u.emailId =:emailId and u.password =:password")
	public Customers findByUserNameAndPassword(@Param("emailId") String emailId,@Param("password") String password);
	
	

	@Query("select u from Customers u where u.emailId =:emailId ")
	public Customers findCustomerByEmail(@Param("emailId") String emailId);

}
