package com.service.All;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DoorStepService.model.Address;
import com.DoorStepService.model.Admin;
import com.DoorStepService.model.Customers;
import com.DoorStepService.model.Orders;
import com.DoorStepService.model.Profession;
import com.DoorStepService.model.Workers;
import com.service.Dao.AdminDao;
import com.service.Dao.OrdersDao;
import com.service.Dao.WorkerDao;
import com.service.ExceptionHandling.UserNotFoundException;
import com.servicr.payload.AdminuserPayload;
import com.servicr.payload.OrdersPayload;

@Service
public class Admin_Service_Implementation implements Admin_Service_Interface {

	@Autowired
	AdminDao admindao;
	
	@Autowired
	OrdersDao ordersdao;
	
	@Autowired
	WorkerDao wordersdao;
	
	@Autowired
	private EmailService emailService;
	
	@Override
	public void addAdmin(AdminuserPayload adminuserPayload) {
		
		Admin admin =new Admin();
		
		admin.setUsername(adminuserPayload.getUsername());
		admin.setPassword(adminuserPayload.getPassword());
		admin.setEmailId(adminuserPayload.getEmailId());
		admin.setMobileno(adminuserPayload.getMobileno());
		
		Address add =new Address();
		add.setCity(adminuserPayload.getCity());
		add.setLandmark(adminuserPayload.getLandmark());
		add.setPincode(adminuserPayload.getPincode());
		add.setState(adminuserPayload.getState());
		
		
		admin.setAddress(add);
		emailService.sendEmailForNewRegistrationAdmin(admin.getEmailId(),admin);
		
		admindao.save(admin);
		
	}

	@Override
	public Optional<Admin> fetchAdminById(String id) {
		// TODO Auto-generated method stub
		return admindao.findById(id);
	}

	@Override
	public void removeAdmin(String username) {
		// TODO Auto-generated method stub
		admindao.deleteById(username);
	}

	@Override
	public Admin login(String username, String password) {
		return admindao.findByUserNameAndPassword(username, password) ;
	}

	@Override
	public List<Orders> getAllOrders() {
		// TODO Auto-generated method stub
		
		return ordersdao.findAll();
	}

	@Override
	public Orders getAllOrdersbyid(Long orders_id) {
		
		return ordersdao.findById(orders_id).orElseThrow(()->new UserNotFoundException("No User Found !!"));
	}

	@Override
	public Orders updateOrder(OrdersPayload orderspayload, Long id) {
		// TODO Auto-generated method stub
		Orders orders =new Orders();
		orders.setOrders_id(id);
		
		orders.setAmount(orderspayload.getAmount());
		orders.setStatus(orderspayload.getStatus());
		orders.setService(orderspayload.getService());
		orders.setOrderdate(orderspayload.getOrderdate());
		Customers cust =new Customers();
		cust.setCust_id(orderspayload.getCust_id());
		orders.setCustomer(cust);
		
		Workers wo =new Workers();
		wo.setWorker_id(orderspayload.getWorker_id());
		orders.setWorkers(wo);
		wo =wordersdao.findWorkerEmailbyid(orderspayload.getWorker_id());
		String email =wo.getEmailId();
		emailService.sendEmailForWorker(email);
		return ordersdao.save(orders);
	}

	@Override
	public Admin getAdminByEmail(String email) {
		
		return admindao.findAdminByEmail(email);
	}

	@Override
	public Admin updateAdminspass(Admin admin) {
		// TODO Auto-generated method stub
		return admindao.save(admin);
	}
	

	
}
