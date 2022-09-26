package com.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EntityScan(basePackages = {"com.model.entity"})
@EnableJpaRepositories(basePackages = {"com.repositories"})
@ComponentScan(basePackages = {"com.controller", "com.service", "com.service.impl"})
@SpringBootApplication
public class TravelairlinesApplication {

	public static void main(String[] args) {
		SpringApplication.run(TravelairlinesApplication.class, args);
	}

}
