package com.service.All;

import java.util.List;
import java.util.Optional;

import com.DoorStepService.model.Admin;
import com.DoorStepService.model.Orders;
import com.DoorStepService.model.Profession;
import com.DoorStepService.model.Workers;
import com.servicr.payload.AdminuserPayload;
import com.servicr.payload.OrdersPayload;

public interface Admin_Service_Interface {

	
	public void addAdmin(AdminuserPayload adminPayload);
	//public List<Admin> getAdmin();
	public Optional<Admin> fetchAdminById(String id);
	//public void updateWorker(Workers worker);
	public void removeAdmin(String username);
	
	public Admin login(String username,String password);
	public List<Orders> getAllOrders();
	public Orders getAllOrdersbyid(Long orders_id);
	public Orders updateOrder(OrdersPayload orderspayload, Long id);
	public Admin getAdminByEmail(String email);
	public Admin updateAdminspass(Admin admin);
}
