package com.service.All;

import java.util.List;
import java.util.Optional;

import com.DoorStepService.model.Profession;
import com.DoorStepService.model.Workers;

public interface Profession_Service_Interface {

	public void addProfession(Profession profession);
	public List<Profession> getProfession();
	public Optional<Profession> fetchProfessionById(long id);
	public Profession updateProfession(Profession profession);
	public void removeProfession(Long prof_id);
	
	
}
