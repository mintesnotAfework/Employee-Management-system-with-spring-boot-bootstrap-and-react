package com.mintesnot.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mintesnot.ems.entity.Employee;

public interface EmployeeRepositoy extends JpaRepository<Employee,Long> {
}
