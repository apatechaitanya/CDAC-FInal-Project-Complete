package com.service.Controller;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.DoorStepService.model.Customers;
import com.DoorStepService.model.Feedback;
import com.DoorStepService.model.Orders;
import com.razorpay.RazorpayClient;
import com.service.All.Customer_Service_Interface;
import com.service.All.EmailService;
import com.service.All.OtpGenerator;
import com.servicr.payload.CustomerPayload;
import com.servicr.payload.FeedbackPayload;
import com.servicr.payload.OrdersPayload;

@RestController
@RequestMapping("/Customer/Controller")
@CrossOrigin("http://localhost:3000")
public class CustomerController {
	
	@Autowired
	Customer_Service_Interface customerInterface;
	
	@Autowired
	private JavaMailSender javasender;
	
	
	
	@Autowired
	private EmailService emailService;

	
	@Autowired
	private OtpGenerator otpGenerator;
	

	
	

	//------------Add new customer-------------------------
	
	@PostMapping("/Registration")
	
	
		public ResponseEntity<?> addcustomer(@RequestBody CustomerPayload customerpayload) throws IOException {
			 System.out.println("ENtered locadd");		
			    
			 
			 customerpayload.setPassword(Base64.getEncoder().encodeToString(customerpayload.getPassword().getBytes())); 
				
			 
			
		Customers customer=	customerInterface.addCustomer(customerpayload);	
			

		
		try {
			return ResponseEntity.status(HttpStatus.OK).body(customer);
		}catch(RuntimeException e) {
			System.out.println("messg");
			System.out.println("messgae is  "+e.getMessage());
			throw new RuntimeException(e.getMessage()+ "Run time error occured");
		}
		
	}
	
	
	//------------GetAll new customer-------------------------
	
	@GetMapping("/AllCustomers")
	public List<Customers> getAllCustomers(){

	return customerInterface.getCustomers();
	
	}
	
	
	//------------GetAll customer by ID-------------------------
	
	@GetMapping("/GetCustomers/{cust_id}")
	public Customers getCustomer(@PathVariable Long cust_id){
	return customerInterface.fetchCustomerById(cust_id);
	}
	
	
	//------------Delete customer-------------------------
	
	@DeleteMapping("/deleteCustomer/{cust_id}")
	public void deleteCustomer(@PathVariable Long cust_id){
		 customerInterface.removeCustomer(cust_id);
		}
	
	
	//------------Update customer-------------------------
	@PutMapping("/updateCustomers/{id}")
	public Customers updatecustomer(@RequestBody CustomerPayload customerpayload,@PathVariable Long id){ 
		 customerpayload.setPassword(Base64.getEncoder().encodeToString(customerpayload.getPassword().getBytes()));
			
		
		return customerInterface.updateCustomer(customerpayload,id);		
	}
	
	
	//------------Update customer for password change-------------------------
		@PutMapping("/updateCustomerspass")
		public Customers updatecustomerpassword(@RequestBody Customers customer){ 
			System.out.println("Entering update password : ");
			System.out.println("CUstomers : "+customer);
			customer.setPassword(Base64.getEncoder().encodeToString(customer.getPassword().getBytes()));
			return customerInterface.updateCustomerpass(customer);		
		}
	
	
	
	
	
	@PostMapping("/customerlogin")
	public Customers customerLogin(@RequestBody Customers customer)  {
		customer.setPassword(Base64.getEncoder().encodeToString(customer.getPassword().getBytes()));
		Customers authcustomer = customerInterface.CustomerLogin(customer.getEmailId(), customer.getPassword());
//		System.out.println(authcustomer.getEmailId()+" "+authcustomer.getPassword()+" data commit ");
//		System.out.println(customer.getEmailId()+" "+customer.getPassword());

		if(authcustomer.getEmailId().trim().equals(customer.getEmailId().trim()) &&
				authcustomer.getPassword().trim().equals(customer.getPassword().trim())) {
			System.out.println("Success");
			return authcustomer;
		}else {
			System.out.println("Fail");
//			return null;
			throw new RuntimeException("Run time error occured");
		}
	}
	
	
	//------------Book Service-------------------------
	
		@PostMapping("/bookservice")
		public void bookService(@RequestBody OrdersPayload OrdersPayload){ 
			System.out.println("Enetered payload : "+OrdersPayload.getStatus());
			 customerInterface.bookservice(OrdersPayload);
					
	}
		
		@GetMapping("/AllOrders/{cust_id}")
		
		public List<Orders> GetAllOrdersByid(@PathVariable Long cust_id){
//			        
		
		 return  customerInterface.getAllOrdersByid(cust_id);
		}
		
	
	
	
		
		// Otp Generator
		@PostMapping("otpgenerator/{email}")
		public ResponseEntity<?> sendOtp(@PathVariable String email) {
			String otp = otpGenerator.generateOTP();
			emailService.sendOtp(email, otp);
			return new ResponseEntity<>("OTP Sent Successfully", HttpStatus.ACCEPTED);
		}

		// Confirm Otp
		@PostMapping("/otpverify/{otp}")
		public String verifyOtp(@PathVariable String otp) {
			boolean res = OtpGenerator.verifyOtp(otp);
			if (res)
				return "OTP verified";
			else
				return "OTP Invalid Please Try Again";
		}
		
		
		
		// get customer by email
		@GetMapping("/getcustomerbyemail/{email}")
		public ResponseEntity<?> getUesrByEmail(@PathVariable String email) {
			System.out.println("Email comming is : "+email);
			Customers customer = customerInterface.getCustomersByEmail(email);
			System.out.println("customer data is : "+customer);
			return new ResponseEntity<>(customer, HttpStatus.ACCEPTED);
		}
		
		
		

		@GetMapping("/AllOrdersnew")
		public List<Orders> getAllOrders(){
		return customerInterface.finduserbyid();
		}
		
		
		
		@GetMapping("/generatedbill/{id}")
		public String GenerateBill(@PathVariable(name="id") long orderId) throws Exception
		
		{
			Orders ord= customerInterface.PayService(orderId);
			double amt=(ord.getAmount());
			RazorpayClient client=new RazorpayClient("rzp_test_z8jPT2wEjTE6dR", "LAnMndVkx9JHzmxMcTwovfsm");

			
			
			JSONObject options = new JSONObject();
			options.put("amount", amt*100);
			options.put("currency", "INR");
			options.put("receipt", "txn_123456");
			//creating an order
			com.razorpay.Order order = client.orders.create(options);
			System.out.println(order);
			
			return order.toString();
			
		}
		
		
//		@GetMapping("/payment/{id}")
//		public ResponseEntity<?> payment(@PathVariable(name="id") int orderId)
//		{
//			return ResponseEntity.status(HttpStatus.OK).body(customerInterface.serviceCompleted(orderId));
//		}
		
		
		@PostMapping("/feedback")
		public Feedback addFeedback(@RequestBody FeedbackPayload feedbackpayload)
		{
			System.out.println("feed : "+feedbackpayload.getFeedback());
			System.out.println("work : "+feedbackpayload.getWorker_id());
			System.out.println("cust : "+feedbackpayload.getCust_id());
		return	customerInterface.addFeedback(feedbackpayload);
			
		}
		
		@GetMapping("/AllFeedback")
		public List<Feedback> getAllFeedbacks(){
//		
		return customerInterface.getAllFeedbacks();
		
		}
	
}

