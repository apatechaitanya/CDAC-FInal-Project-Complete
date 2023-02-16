package com.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;




@Configuration
@ComponentScan
@EnableAutoConfiguration
@EntityScan("com.DoorStepService.model") // path of the entity model
@EnableJpaRepositories("com.service.Dao") // path of jpa repository 
@SpringBootApplication

public class AtDoorServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AtDoorServiceApplication.class, args);
		
	}

}
