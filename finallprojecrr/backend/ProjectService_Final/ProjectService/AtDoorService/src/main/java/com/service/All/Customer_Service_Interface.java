package com.service.All;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.DoorStepService.model.Customers;
import com.DoorStepService.model.Feedback;
import com.DoorStepService.model.Orders;
import com.servicr.payload.CustomerPayload;
import com.servicr.payload.FeedbackPayload;
import com.servicr.payload.OrdersPayload;


public interface Customer_Service_Interface {

	public Customers addCustomer(CustomerPayload customerpayload);
	public List<Customers> getCustomers();
	public Customers fetchCustomerById(long id);
	public Customers updateCustomer(CustomerPayload customerpayload,Long id);
	public void removeCustomer(Long cust_id);
	public Customers CustomerLogin(String emailId,String password);
	public void bookservice(OrdersPayload ordersPayload);
	public List<Orders> getAllOrdersByid(Long cust_id);
	public List<Orders> finduserbyid();
	public Customers getCustomersByEmail(String email);
	public Customers updateCustomerpass(Customers customer);
	public Orders PayService(long orderId) ;
	public Feedback addFeedback(FeedbackPayload feedbackpayload);
	public List<Feedback> getAllFeedbacks();
	
}
