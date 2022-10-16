package net.javaguides.springboot.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;
import net.javaguides.springboot.service.EmployeeService;

@RestController

public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	

	
	@Autowired
	private EmployeeService employeeService;
	
	// get all employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}		
	
	
	@PutMapping("/employeedetailsput/{id}")
	public void addEmployee(@PathVariable int id, @RequestBody Employee employee) {
		
		 System.out.println("Processing employee details");
         
         
	        
		employeeService.updateEmployee(id, employee);
	}
	
	
	
	
}
