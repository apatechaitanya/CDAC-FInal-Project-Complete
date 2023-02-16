package com.service.Controller;

import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.DoorStepService.model.Admin;
import com.DoorStepService.model.Customers;
import com.DoorStepService.model.Orders;
import com.DoorStepService.model.Workers;
import com.service.All.Customer_Service_Interface;
import com.service.All.EmailService;
import com.service.All.Worker_Service_Interface;
import com.servicr.payload.WorkerPayload;

@RestController
@RequestMapping("/Worker/Controller")
@CrossOrigin("http://localhost:3000")
public class WorkerController {

	@Autowired
	Worker_Service_Interface workerInterface;
	
	

	//------------Add new Worker-------------------------
	
	@PostMapping("/RegistrationWorker")
	
		public ResponseEntity<?> addworker(@RequestBody WorkerPayload workerPayload){
		
		 workerPayload.setPassword(Base64.getEncoder().encodeToString(workerPayload.getPassword().getBytes()));
			
		
		
			Workers worker= workerInterface.addWorker(workerPayload);	
			return ResponseEntity.status(HttpStatus.OK).body(worker);
			
	
	}
	
	//------------GetAll new Worker-------------------------
	
	@GetMapping("/AllWorker")
	public List<Workers> getAllWorkers(){
	return workerInterface.getWorker();
	}
	
	
	//------------GetAll Worker by ID-------------------------
	
	@GetMapping("/GetWorker/{worker_id}")
	public Workers getCustomer(@PathVariable Long worker_id){
		
		
	return workerInterface.fetchWorkerById(worker_id).orElse(null);
	}
	
	
	//------------Delete Worker-------------------------
	
	@DeleteMapping("/deleteWorker/{worker_id}")
	public void deleteCustomer(@PathVariable Long worker_id){
		workerInterface.removeWorker(worker_id);
		}
	
	
	//------------Update worker-------------------------
	@PutMapping("/updateWorker/{id}")
	public Workers updatecustomer(@RequestBody WorkerPayload workerPayload,@PathVariable Long id){   
		System.out.println("entered update worker ");
	
		 workerPayload.setPassword(Base64.getEncoder().encodeToString(workerPayload.getPassword().getBytes()));
			
		return workerInterface.updateWorker(workerPayload,id);
				
	}
	
	
	//------------Update Worker for password change-------------------------
			@PutMapping("/updateWorkerspass")
			public Workers updateworkerpassword(@RequestBody Workers worker){ 
				System.out.println("Entering update password : ");
				System.out.println("Workers : "+worker);
				worker.setPassword(Base64.getEncoder().encodeToString(worker.getPassword().getBytes()));
				return workerInterface.updateWorkerspass(worker);		
			}
		
	
	
	
	
	@PostMapping("/workerlogin")
	public Workers workersLogin(@RequestBody Workers workers)  {
		
		 workers.setPassword(Base64.getEncoder().encodeToString(workers.getPassword().getBytes()));
		
		Workers authworker = workerInterface.WorkerLogin(workers.getEmailId(), workers.getPassword());
		System.out.println(authworker.getEmailId()+" "+authworker.getPassword());
		System.out.println(workers.getEmailId()+" "+workers.getPassword());

		if(authworker.getEmailId().trim().equals(workers.getEmailId().trim()) &&
				authworker.getPassword().trim().equals(workers.getPassword().trim())) {
			System.out.println("Success");
			return authworker;
		}else {
			System.out.println("Fail");
//			return null;
			throw new RuntimeException("80 Hazar ke shoes he tera ghar jayenga issme");
		}
	}
	
	
	@GetMapping("/AllOrdersByWorker/{worker_id}")
	
	public List<Orders> GetAllOrdersByid(@PathVariable Long worker_id){
//		        System.out.println("Heloo   "+cust_id);
//	List<Orders> orders= customerInterface.getAllOrdersByid(cust_id);
//	  System.out.println("odres status  "+orders.isEmpty());
//	  System.out.println("details : "+orders.toString());
//	return orders;
	
	 return  workerInterface.getAllOrdersByid(worker_id);
	}
	
	
	@GetMapping("/getworkerbyemail/{email}")
	public ResponseEntity<?> getWorkerByEmail(@PathVariable String email) {
		System.out.println("Email comming is : "+email);
		Workers worker = workerInterface.getWorkerByEmail(email);
		System.out.println("customer data is : "+worker);
		return new ResponseEntity<>(worker, HttpStatus.ACCEPTED);
	}
	
	
	
}
