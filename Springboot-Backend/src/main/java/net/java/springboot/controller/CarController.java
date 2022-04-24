package net.java.springboot.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import net.java.springboot.exception.ResourceNotFoundException;
import net.java.springboot.model.Car;
import net.java.springboot.repository.CarRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController

@RequestMapping("/api/v1/")
public class CarController {

	@Autowired
	private CarRepository carRepository;
	
	// get all employees
	@GetMapping("/cars")
	public List<Car> getAllCars(){
		return carRepository.findAll();
	}		
	
	//create car rest API
	@PostMapping("/Addcars")
	public Car createcars(@RequestBody Car car) {
		return carRepository.save(car);
	}
//get employee by id rest api
	@GetMapping("/cars/{id}")
	public ResponseEntity<Car> getcarbynum(@PathVariable String id) {
		System.out.println(id);		
		Car car=carRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Car not exist with id :"+id));
		return ResponseEntity.ok(car);
	}
	
	//Update Employee Rest API
	@PutMapping("/cars/{id}")
	public ResponseEntity<Car> updateCars( @PathVariable  String id , @RequestBody  Car carsDetails){
			
		System.out.println(carsDetails.getCarname());		
		Car car=carRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Car not exist with id :"+id) );
		car.setCarname(carsDetails.getCarname());
		car.setCarnum(carsDetails.getCarnum());
		car.setDrivername(carsDetails.getDrivername());
		
		Car Updatedcar = carRepository.save(car);
		return ResponseEntity.ok(Updatedcar);
		
	}
	
	//Delete Employee Rest API
	@DeleteMapping("/cars/{id}")
	public ResponseEntity <Map<String , Boolean>>deletecar(@PathVariable String id){
		System.out.println(id);	
		Car car=carRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Car not exist with id :"+id) );
		carRepository.delete(car);
		Map<String , Boolean> response = new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
	
	
	
	
	
	
}
