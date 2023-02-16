package com.service.All;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DoorStepService.model.Address;
import com.DoorStepService.model.Customers;
import com.DoorStepService.model.Orders;
import com.DoorStepService.model.Profession;
import com.DoorStepService.model.Workers;
import com.service.Dao.OrdersDao;
import com.service.Dao.ProfessionDao;
import com.service.Dao.WorkerDao;
import com.service.ExceptionHandling.UserNotFoundException;
import com.servicr.payload.WorkerPayload;

@Service
public class Worker_Service_Implementation implements Worker_Service_Interface {

	@Autowired
	public WorkerDao workerdao;
	
	@Autowired
	public ProfessionDao professiondao;
	
	@Autowired
	public OrdersDao ordersdao;
	
	@Autowired
	private EmailService emailService;
	
	@Override
	public Workers addWorker(WorkerPayload workerPayload) {
		// TODO Auto-generated method stub
		
		System.out.println(workerPayload.getCity());
		Workers workers = new Workers();
		
		workers.setFirst_name(workerPayload.getFirst_name());
		workers.setLast_name(workerPayload.getLast_name());
		workers.setEmailId(workerPayload.getEmailId());
		workers.setPassword(workerPayload.getPassword());
		workers.setVerified(workerPayload.getVerified());
		workers.setMobile(workerPayload.getMobile());
		workers.setAvailable(workerPayload.getAvailable());
		
		Address address = new Address();		
		address.setCity(workerPayload.getCity());
		address.setLandmark(workerPayload.getLandmark());
		address.setPincode(workerPayload.getPincode());
		address.setState(workerPayload.getState());
		
		Profession profession = new Profession();
//		profession.setProf_name(workerPayload.getProf_name());
//		profession.setBasic_charges(workerPayload.getBasic_charges());		
		profession.setProf_id(workerPayload.getProf_id());
		
		workers.setAddress(address);
		workers.setProfession(profession);
		
		
		emailService.sendEmailForNewRegistrationWorker(workers.getEmailId(),workers);
		return workerdao.save(workers);
		
	}

	@Override
	public List<Workers> getWorker() {
		// TODO Auto-generated method stub
		return workerdao.findAll();
	}

	@Override
	public Optional<Workers> fetchWorkerById(long id) {
		// TODO Auto-generated method stub
		return workerdao.findById(id);
	}

	@Override
	public Workers updateWorker(WorkerPayload workerPayload,Long id) {
		// TODO Auto-generated method stub
		Workers workers = new Workers();
		workers.setFirst_name(workerPayload.getFirst_name());
		workers.setLast_name(workerPayload.getLast_name());
		workers.setEmailId(workerPayload.getEmailId());
		workers.setPassword(workerPayload.getPassword());
		workers.setVerified(workerPayload.getVerified());
		workers.setMobile(workerPayload.getMobile());
		workers.setAvailable(workerPayload.getAvailable());
		workers.setWorker_id(id);
		
		Address address = new Address();		
		address.setCity(workerPayload.getCity());
		address.setLandmark(workerPayload.getLandmark());
		address.setPincode(workerPayload.getPincode());
		address.setState(workerPayload.getState());
		
	//	Profession profession = new Profession();
//		profession.setProf_name(workerPayload.getProf_name());
//		profession.setBasic_charges(workerPayload.getBasic_charges());		
//		profession.setProf_id(workerPayload.getProf_id());

		Profession profession =professiondao.findById(workerPayload.getProf_id()).orElseThrow(()->new UserNotFoundException("No User Found !!"));
		workers.setAddress(address);
		workers.setProfession(profession);
		
		return workerdao.save(workers);
	}

	@Override
	public void removeWorker(Long worker) {
		// TODO Auto-generated method stub
		workerdao.deleteById(worker);
	}

	@Override
	public Workers WorkerLogin(String emailId, String password) {
		// TODO Auto-generated method stub
		return workerdao.findByUserNameAndPassword(emailId, password);
	}

	@Override
	public List<Orders> getAllOrdersByid(Long worker_id) {
		// TODO Auto-generated method stub
		
		System.out.println("id is  "+worker_id);
		List<Orders> orders= ordersdao.findAllByWorkerid(worker_id);
		System.out.println("in service implementation "+orders.toString());
		System.out.println("in service implementation "+orders.hashCode());
		return orders;
		
	}

	@Override
	public Workers getWorkerByEmail(String email) {
		// TODO Auto-generated method stub
		return workerdao.finddWorkerByEmail(email);
	}

	@Override
	public Workers updateWorkerspass(Workers worker) {
		
		return workerdao.save(worker);
	}

}
