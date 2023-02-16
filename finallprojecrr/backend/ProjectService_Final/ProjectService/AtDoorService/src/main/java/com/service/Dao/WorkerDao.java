package com.service.Dao;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.DoorStepService.model.Admin;
import com.DoorStepService.model.Workers;

//@Component
@Repository
public interface WorkerDao extends JpaRepository<Workers,Long> {
	@Query("select u from Workers u where u.emailId =:emailId and u.password =:password")
	public Workers findByUserNameAndPassword(@Param("emailId") String emailId,@Param("password") String password);
	
//	@Query("select u from Workers u where u.emailId =:emailId and u.password =:password")
//	public Workers finddWorkerByEmail(@Param("emailId") String emailId,@Param("password") String password);
	
	@Query("select u from Workers u where u.emailId =:emailId ")
	public Workers finddWorkerByEmail(@Param("emailId") String emailId);
	
	@Query("select u from Workers u where u.worker_id =:worker_id ")
	public Workers findWorkerEmailbyid(@Param("worker_id") Long worker_id);
	
	
	

}
