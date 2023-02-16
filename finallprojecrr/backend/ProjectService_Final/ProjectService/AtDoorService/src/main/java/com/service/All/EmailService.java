package com.service.All;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.DoorStepService.model.Admin;
import com.DoorStepService.model.Customers;
import com.DoorStepService.model.Workers;

@Service
public class EmailService {

	@Autowired
	private JavaMailSender emailSender;

	public void sendEmailForNewRegistration(String email, Customers customer) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("chaitanyaapate9@gmail.com");
		message.setTo(email);
		message.setSubject("WELCOME to On door services");
		message.setText("Thank you " + customer.getFirst_name() +" "+customer.getLast_name()+" for Registering with us!");
		emailSender.send(message);
	}
	
	
	public void sendEmailForWorker(String email) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("chaitanyaapate9@gmail.com");
		message.setTo(email);
		message.setSubject("Dear service provider, You have been assigned a order!");
		message.setText(" Please check the your orders List ");
		emailSender.send(message);
	}

	
	
	
	public void sendOtp(String email, String otp) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(email);
		message.setSubject("WELCOME to On door services");
		message.setText(otp);
		emailSender.send(message);
	}


	public void sendEmailForNewRegistrationAdmin(String emailId, Admin admin) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("chaitanyaapate9@gmail.com");
		message.setTo(emailId);
		message.setText("Thank you " + admin.getUsername() +" for Registering with us!");
		message.setSubject("Please check the My orders ");
		emailSender.send(message);
		
	}


	public void sendEmailForNewRegistrationWorker(String emailId, Workers workers) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("chaitanyaapate9@gmail.com");
		message.setTo(emailId);
		message.setText("Thank you " + workers.getFirst_name() +" "+workers.getLast_name()+" for Registering with us! as a Service Provider");
		message.setSubject("Please check the My orders ");
		emailSender.send(message);
		
	}
}
