package com.service.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.DoorStepService.model.Orders;



@Repository
public interface OrdersDao extends JpaRepository<Orders,Long> {

//	
	//@Query("select o from Orders o where o.cust_id =:cust_id")
	//public List<Orders> findAllById(@Param("cust_id") Long cust_id);
//	
	//public List<Orders> findByUserId(Long cust_id);
	
	
	@Query(value = "select * from orders o where o.cust_id=:cust_id", nativeQuery = true)
	public List<Orders> findAllById(@Param("cust_id") Long cust_id);
//
//
	@Query(value = "select * from orders o where o.worker_id=:worker_id", nativeQuery = true)
	public List<Orders> findAllByWorkerid(@Param("worker_id") Long cust_id);

//	public List<Orders> findByUserId(Long cust_id);
	
}
