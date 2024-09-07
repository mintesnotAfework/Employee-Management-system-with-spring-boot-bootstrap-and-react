package com.mintesnot.ems.service.EmployeeServiceImplementation;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import com.mintesnot.ems.dto.EmployeeDto;
import com.mintesnot.ems.entity.Employee;
import com.mintesnot.ems.mapper.EmployeeMapper;
import com.mintesnot.ems.repository.EmployeeRepositoy;
import com.mintesnot.ems.service.EmployeeService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployeeServiceImplementation implements EmployeeService {

    private EmployeeRepositoy employeeRepositoy;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepositoy.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployee(Long id) throws NoSuchElementException{
        Employee employee = employeeRepositoy.findById(id).orElseThrow();
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployee(){
        List<Employee> employees = employeeRepositoy.findAll();
        return employees.stream().
                        map((employee) -> EmployeeMapper.mapToEmployeeDto(employee)).
                        collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long id,EmployeeDto employeeDto) throws NoSuchElementException{
        if(id == employeeDto.getId()){
            Employee oldEmployee = employeeRepositoy.findById(id).orElseThrow();
            oldEmployee.setFirstName(employeeDto.getFirstName());
            oldEmployee.setLastName(employeeDto.getLastName());
            oldEmployee.setEmail(employeeDto.getEmail());
            Employee newEmployee = employeeRepositoy.save(oldEmployee);
            return EmployeeMapper.mapToEmployeeDto(newEmployee);
        }
        return employeeDto;
    }

    @Override
    public Boolean deleteEmployee(Long id) throws NoSuchElementException{
        Employee employee = employeeRepositoy.findById(id).orElseThrow();
        try{
            employeeRepositoy.delete(employee);
            return true;
        }
        catch(Exception e){
            return false;
        }
    }
}
