package com.service.All;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.query.Param;

import com.DoorStepService.model.Customers;
import com.DoorStepService.model.Orders;
import com.DoorStepService.model.Workers;
import com.servicr.payload.WorkerPayload;

public interface Worker_Service_Interface {

	public Workers addWorker(WorkerPayload workerPayload);
	public List<Workers> getWorker();
	public Optional<Workers> fetchWorkerById(long id);
	public Workers updateWorker(WorkerPayload workerPayload,Long id);
	public void removeWorker(Long worker_id);
	public Workers WorkerLogin(String emailId,String password);
	public List<Orders> getAllOrdersByid(Long worker_id);
	public Workers getWorkerByEmail(String email);
	public Workers updateWorkerspass(Workers worker);

	
}
