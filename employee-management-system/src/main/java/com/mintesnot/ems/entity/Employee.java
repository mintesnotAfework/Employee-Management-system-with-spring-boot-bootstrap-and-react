package com.mintesnot.ems.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// import java.util.InputMismatchException;
// import java.util.regex.Matcher;
// import java.util.regex.Pattern;


@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name",nullable = false)
    private String firstName;

    @Column(name = "last_name",nullable = false)
    private String lastName;

    @Column(name = "email",nullable = false,unique = true)
    private String email;

    // public void setEmail(String email){
    //     String pattern = ".am";
    //     Boolean match = Pattern.matches(email, pattern);

    //     if (match){
    //         this.email = email;
    //     }
    //     else{
    //         throw new InputMismatchException();
    //     }
    // }
}
