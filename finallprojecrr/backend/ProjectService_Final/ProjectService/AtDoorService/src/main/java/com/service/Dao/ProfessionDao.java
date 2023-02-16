package com.service.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.DoorStepService.model.Profession;

@Repository
public interface ProfessionDao extends JpaRepository<Profession,Long>  {

}
