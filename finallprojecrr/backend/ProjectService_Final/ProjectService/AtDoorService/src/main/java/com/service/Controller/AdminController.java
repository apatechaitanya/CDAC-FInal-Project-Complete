package com.service.Controller;

import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.DoorStepService.model.Admin;
import com.DoorStepService.model.Customers;
import com.DoorStepService.model.Orders;
import com.DoorStepService.model.Profession;
import com.DoorStepService.model.Workers;
import com.service.All.Admin_Service_Interface;
import com.service.All.Worker_Service_Interface;
import com.servicr.payload.AdminuserPayload;
import com.servicr.payload.CustomerPayload;
import com.servicr.payload.OrdersPayload;

import io.jsonwebtoken.lang.Objects;


@RestController
@RequestMapping("/Admin/Controller")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

	@Autowired
	Admin_Service_Interface adminInterface;
	
	//------------Add new Admin-------------------------
	
		@PostMapping("/RegistrationAdmin")
		
		
		/*	public void addadmin(@RequestBody Admin admin){
				 System.out.println("ENtered admin controller");
				 System.out.println("NAme"+ admin.getUsername());
				 System.out.println("Address "+admin.getAddress());
				
				 adminInterface.addAdmin(admin);	
		}
		*/
		
		public void addadmin(@RequestBody AdminuserPayload adminPayload){
			 System.out.println("ENtered admin Payload controller");
			 System.out.println("NAme"+ adminPayload.getUsername());
			 System.out.println("Address "+adminPayload.getCity());
			 adminPayload.setPassword(Base64.getEncoder().encodeToString(adminPayload.getPassword().getBytes()));
			
			 adminInterface.addAdmin(adminPayload);	
		}
		
		//------------Get Admin by ID-------------------------
		
		@GetMapping("/GetCustomers/{admin_id}")
		public Admin getAdmin(@PathVariable String admin_id){
		return adminInterface.fetchAdminById(admin_id).orElse(null);
		}
		
		//------------Delete Admin-------------------------
		
		@DeleteMapping("/RemoveAdmin/{username}")
		public void deleteCustomer(@PathVariable String username){
			adminInterface.removeAdmin(username);
			}
		
		
		@PostMapping("/login")
		public Admin login(@RequestBody Admin admin) {
			
			System.out.println("ENter admin login : "+admin.getUsername()+" Entered in Admin login "+admin.getPassword());
			
			admin.setPassword(Base64.getEncoder().encodeToString(admin.getPassword().getBytes()));
			Admin authAdmin = adminInterface.login(admin.getUsername(), admin.getPassword());
			System.out.println(authAdmin.getUsername()+" "+authAdmin.getPassword());
			System.out.println(admin.getUsername()+" "+admin.getPassword());
			if(authAdmin.getUsername().trim().equals(admin.getUsername().trim()) && authAdmin.getPassword().trim().equals(admin.getPassword().trim())) {
				System.out.println("Success");
				return authAdmin;
			}else {
				System.out.println("Fail");
				return null;
			}
		
		}
		
		@GetMapping("/AllOrderstoAdmin")
		public List<Orders> GetAllOrders(){
//			        System.out.println("Heloo   "+cust_id);
//		List<Orders> orders= customerInterface.getAllOrdersByid(cust_id);
//		  System.out.println("odres status  "+orders.isEmpty());
//		  System.out.println("details : "+orders.toString());
//		return orders;
		
		 return  adminInterface.getAllOrders();
		}


			@GetMapping("/AllOrderstoAdminbyid/{orders_id}")
			
			public Orders GetAllOrdersbyid(@PathVariable Long orders_id){
			//	        System.out.println("Heloo   "+cust_id);
			//List<Orders> orders= customerInterface.getAllOrdersByid(cust_id);
			//  System.out.println("odres status  "+orders.isEmpty());
			//  System.out.println("details : "+orders.toString());
			//return orders;
				 System.out.println("orders id is "+orders_id);
			 return  adminInterface.getAllOrdersbyid(orders_id);
			}
				
			
			@PutMapping("/updateOrder/{id}")
			public Orders updateorder(@RequestBody OrdersPayload orders,@PathVariable Long id){ 
				System.out.println("date is : "+orders.getOrderdate());
				
				return adminInterface.updateOrder(orders,id);		
			}
			
			@GetMapping("/getadminbyemail/{email}")
			public ResponseEntity<?> getAdminByEmail(@PathVariable String email) {
				System.out.println("Email comming is : "+email);
				Admin admin = adminInterface.getAdminByEmail(email);
				System.out.println("customer data is : "+admin);
				return new ResponseEntity<>(admin, HttpStatus.ACCEPTED);
			}
			
			//------------Update Worker for password change-------------------------
			@PutMapping("/updateAdminpass")
			public Admin updateadminpassword(@RequestBody Admin admin){ 
				admin.setPassword(Base64.getEncoder().encodeToString(admin.getPassword().getBytes()));
				
				return adminInterface.updateAdminspass(admin);		
			}
		
	
}
