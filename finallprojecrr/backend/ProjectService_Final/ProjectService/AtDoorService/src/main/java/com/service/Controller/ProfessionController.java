package com.service.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.DoorStepService.model.Admin;
import com.DoorStepService.model.Customers;
import com.DoorStepService.model.Profession;
import com.service.All.Admin_Service_Interface;
import com.service.All.Profession_Service_Interface;

@RestController
public class ProfessionController {

	@Autowired
	Profession_Service_Interface professionInterface;
	
	//------------Add new Admin-------------------------
	
		@PostMapping("/RegistrationProfession")
		
		
			public void addprofession(@RequestBody Profession profession){
				 System.out.println("ENtered locadd");		
				 professionInterface.addProfession(profession);	
		}
		
		
		
		//------------GetAll  Profession-------------------------
		
		@GetMapping("/AllProfession")
		public List<Profession> getAllProfession(){
		return professionInterface.getProfession();
		}
		
		
		//------------GetAll Profession by ID-------------------------
		
		@GetMapping("/GetProfession/{prof_id}")
		public Profession getProfession(@PathVariable Long prof_id){
		return professionInterface.fetchProfessionById(prof_id).orElse(null);
		}
		
		
		//------------Update Profession-------------------------
		@PutMapping("/UpdateProfession")
		public Profession updateprofession(@RequestBody Profession profession){    	
			return professionInterface.updateProfession(profession);
					
	}
		
		
		//------------Delete Profession-------------------------
		
		@DeleteMapping("/RemoveProfession/{prof_id}")
		public void deleteProfession(@PathVariable Long prof_id){
			professionInterface.removeProfession(prof_id);
			}
		
		
}
