package com.service.Dao;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.DoorStepService.model.Feedback;




@Repository
public interface FeedbackDao extends JpaRepository<Feedback,Long>{
	
	

}
