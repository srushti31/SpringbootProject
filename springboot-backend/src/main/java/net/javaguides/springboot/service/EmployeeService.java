package net.javaguides.springboot.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	public EmployeeRepository employeerepository;
	
	@Autowired
    private ApplicationEventPublisher publisher;
	
	public void updateEmployee(int id, Employee employee) {
		
		
		this.publisher.publishEvent(new UserEvent(id));
        System.out.println("Method ends");
		employeerepository.save(employee);
		
	}

}
