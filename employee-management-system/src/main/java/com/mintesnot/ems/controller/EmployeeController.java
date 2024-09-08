package com.mintesnot.ems.controller;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
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
import com.mintesnot.ems.dto.EmployeeDto;
import com.mintesnot.ems.service.EmployeeService;
import lombok.AllArgsConstructor;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees")
@AllArgsConstructor
public class EmployeeController {
    private EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<EmployeeDto> createEntity(@RequestBody EmployeeDto employeeDto){
        try{
            EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
            return new ResponseEntity<>(savedEmployee,HttpStatus.CREATED);
        }
        catch(DataIntegrityViolationException d){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        
    }

    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEntity(@PathVariable Long id){
        try{
            EmployeeDto employeeDto = employeeService.getEmployee(id);
            return new ResponseEntity<>(employeeDto,HttpStatus.OK);
        }
        catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("all")
    public ResponseEntity<List<EmployeeDto>> getAllEntity(){
        List<EmployeeDto> employees = employeeService.getAllEmployee();
        return new ResponseEntity<>(employees,HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEntity(@PathVariable Long id, @RequestBody EmployeeDto employeeDto){
        if(Objects.equals(id, employeeDto.getId())){
            try{
                EmployeeDto udpatedEmployee = employeeService.updateEmployee(id, employeeDto);
                return new ResponseEntity<>(udpatedEmployee,HttpStatus.ACCEPTED); 
            }
            catch(NoSuchElementException e){
                return new ResponseEntity<>(HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS);
            }

        }
        else{
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } 
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Object> deleteEntity(@PathVariable Long id){
        try{
            if(Boolean.TRUE.equals(employeeService.deleteEmployee(id))){
                return new ResponseEntity<>(HttpStatus.ACCEPTED);
            }
            else{
                return new ResponseEntity<>(false,HttpStatus.SERVICE_UNAVAILABLE);
            }
        }

        catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
        }
        
    }
}
