package com.service.All;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DoorStepService.model.Address;
import com.DoorStepService.model.Customers;
import com.DoorStepService.model.Feedback;
import com.DoorStepService.model.Orders;
import com.DoorStepService.model.Workers;

import com.service.Dao.CustomerDao;
import com.service.Dao.FeedbackDao;
import com.service.Dao.OrdersDao;
import com.service.Dao.WorkerDao;
import com.service.ExceptionHandling.OrderNotfoundException;
import com.service.ExceptionHandling.UserNotFoundException;
import com.servicr.payload.CustomerPayload;
import com.servicr.payload.FeedbackPayload;
import com.servicr.payload.OrdersPayload;
import com.servicr.payload.WorkerPayload;

@Service
public class Customer_Service_Implementation implements Customer_Service_Interface {

	
	@Autowired
	CustomerDao customerdao;
	
	@Autowired
	private EmailService emailService;
	
	
	@Autowired
	OrdersDao ordersdao;
	
	@Autowired
	WorkerDao workerdao;
	
	@Autowired
	FeedbackDao	feedbackdao;
	
	
	@Override
	public Customers addCustomer(CustomerPayload customerpayload) {
		
		Customers customer =new Customers();
		customer.setFirst_name(customerpayload.getFirst_name());
		customer.setLast_name(customerpayload.getLast_name());
		customer.setEmailId(customerpayload.getEmailId());
		customer.setPassword(customerpayload.getPassword());
		customer.setMobile(customerpayload.getMobile());
		
		
		Address add =new Address();
		add.setCity(customerpayload.getCity());
		add.setLandmark(customerpayload.getLandmark());
		add.setPincode(customerpayload.getPincode());
		add.setState(customerpayload.getState());
		
		customer.setAddress(add);
		emailService.sendEmailForNewRegistration(customer.getEmailId(),customer);

		return customerdao.save(customer);
		
	}

	@Override
	public List<Customers> getCustomers() {
		// TODO Auto-generated method stub
		return customerdao.findAll();
	}

	@Override
	public Customers fetchCustomerById(long id) {
		// TODO Auto-generated method stub
		return customerdao.findById(id).orElseThrow(()->new UserNotFoundException("No User Found !!"));
	}

	@Override
	public Customers updateCustomer(CustomerPayload customerpayload,Long id) {
		
		Customers customer =new Customers();
		customer.setFirst_name(customerpayload.getFirst_name());
		customer.setLast_name(customerpayload.getLast_name());
		customer.setEmailId(customerpayload.getEmailId());
		customer.setPassword(customerpayload.getPassword());
		customer.setMobile(customerpayload.getMobile());
		customer.setId(id);
		
		
		Address add =new Address();
		add.setCity(customerpayload.getCity());
		add.setLandmark(customerpayload.getLandmark());
		add.setPincode(customerpayload.getPincode());
		add.setState(customerpayload.getState());
		
		customer.setAddress(add);
		
		customerdao.save(customer);
		
		System.out.println("ID comming in service "+customer.getId());
		return customerdao.save(customer);
		
	}

/*	@Override
	public void removeCustomer(Customers customer) {
		customerdao.delete(customer);
		
	}*/

	@Override
	public void removeCustomer(Long cust_id) {
		// TODO Auto-generated method stub
		 customerdao.deleteById(cust_id); 
	}

	@Override
	public Customers CustomerLogin(String emailId, String password) {
		return customerdao.findByUserNameAndPassword(emailId, password);
	}

	@Override
	public void bookservice(OrdersPayload ordersPayload) {
		Orders order =new Orders();
		
		order.setAmount(ordersPayload.getAmount());
		order.setOrderdate(ordersPayload.getOrderdate());
		order.setStatus(ordersPayload.getStatus());
		order.setService(ordersPayload.getService());
		System.out.println("id : "+ordersPayload.getCust_id());
	
		Customers cu =customerdao.findById(ordersPayload.getCust_id()).orElseThrow(()->new UserNotFoundException("No CUstomer Found !!"));
		
		 Workers wor= workerdao.findById(ordersPayload.getWorker_id()).orElse(null);
				 
		
		
		order.setCustomer(cu);
		order.setWorkers(wor);
		 ordersdao.save(order);
		 
		
	}

	@Override
	public List<Orders> getAllOrdersByid(Long cust_id) {
		// TODO Auto-generated method stub
		System.out.println("id is  "+cust_id);
		List<Orders> orders= ordersdao.findAllById(cust_id);
		System.out.println("in service implementation "+orders.toString());
		System.out.println("in service implementation "+orders.hashCode());
		return orders;
		//return ordersdao.findAllById(cust_id);
	}

	@Override
	public List<Orders> finduserbyid() {
		// TODO Auto-generated method stub
		ordersdao.findAll();
		return null;
	}

	@Override
	public Customers getCustomersByEmail(String email) {
		return	customerdao.findCustomerByEmail(email);
		
	}

	@Override
	public Customers updateCustomerpass(Customers customer) {
		
		return customerdao.save(customer); 
	}
	
	
	
	public Orders PayService(long orderId) 
	{
		Orders order= ordersdao.findById(orderId).orElseThrow(()->new OrderNotfoundException("No Order Found !!"));
		
			return order;
	
	}

	@Override
	public Feedback addFeedback(FeedbackPayload feedbackpayload) {
		System.out.println("string "+feedbackpayload.getFeedback());
		Feedback fb =new Feedback();
		fb.setFeedback_id(feedbackpayload.getFeedback_id());
		fb.setFeedback(feedbackpayload.getFeedback());
		
//		Customers cust =new Customers();
//		cust.setCust_id(feedbackpayload.getCust_id());
//		
//		Workers worker =new Workers();
//		worker.setWorker_id(feedbackpayload.getWorker_id());
		
		System.out.println("cust : "+feedbackpayload.getCust_id());
		Customers cust =customerdao.findById(feedbackpayload.getCust_id()).orElseThrow(()->new UserNotFoundException("No Customer Found !!"));
		
		 Workers worker= workerdao.findById(feedbackpayload.getWorker_id()).orElseThrow(()->new UserNotFoundException("No Worker Found !!"));
		
		
		fb.setCustomer(cust);
		fb.setWorker(worker);
		
		
		
		// TODO Auto-generated method stub
		return feedbackdao.save(fb);
		
	}

	@Override
	public List<Feedback> getAllFeedbacks() {
		// TODO Auto-generated method stub
		return feedbackdao.findAll();
	}

	
}
