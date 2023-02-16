package com.service.Dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.DoorStepService.model.Admin;
import com.DoorStepService.model.Customers;


@Repository
public interface AdminDao extends JpaRepository<Admin,String>  {
	
//	@Query(value="select * from admin where username = :id and password = password",nativeQuery = true)
//	public Admin findByUserNameAndPassword(@Param("id")String username,@Param("password") String password);

//	@Query("select u from Admin u where u.username = username and u.password = password")
//	public Admin findByUserNameAndPassword(@Param("username") String username,@Param("password") String password);

	
	@Query("select u from Admin u where u.username =:username and u.password =:password")
	public Admin findByUserNameAndPassword(@Param("username") String username,@Param("password") String password);
	
	@Query("select u from Admin u where u.emailId =:emailId ")
	public Admin findAdminByEmail(@Param("emailId") String emailId);
	
	
	
}
