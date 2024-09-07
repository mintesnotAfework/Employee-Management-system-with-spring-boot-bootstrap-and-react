package com.mintesnot.ems.service;

import java.util.List;
import com.mintesnot.ems.dto.EmployeeDto;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployee(Long id);
    List<EmployeeDto> getAllEmployee();
    EmployeeDto updateEmployee(Long id,EmployeeDto employeeDto);
    Boolean deleteEmployee(Long id);
}
