package com.example.demo;

import org.springframework.data.repository.CrudRepository; // Import the CrudRepository class

public interface EmployeeRepository extends CrudRepository<Employee, Long> {

}
