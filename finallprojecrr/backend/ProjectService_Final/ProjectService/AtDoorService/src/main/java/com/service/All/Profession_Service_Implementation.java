package com.service.All;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DoorStepService.model.Profession;
import com.service.Dao.ProfessionDao;

@Service
public class Profession_Service_Implementation implements Profession_Service_Interface {

	@Autowired
	ProfessionDao professiondao;
	
	@Override
	public void addProfession(Profession profession) {
		// TODO Auto-generated method stub
		professiondao.save(profession);
		
	}

	@Override
	public List<Profession> getProfession() {
		// TODO Auto-generated method stub
		return professiondao.findAll();
	}

	@Override
	public Optional<Profession> fetchProfessionById(long id) {
		// TODO Auto-generated method stub
		return professiondao.findById(id);
	}

	@Override
	public Profession updateProfession(Profession profession) {
		// TODO Auto-generated method stub
		return professiondao.save(profession);
	}

	@Override
	public void removeProfession(Long prof_id) {
		// TODO Auto-generated method stub
		professiondao.deleteById(prof_id);
		
	}

}
