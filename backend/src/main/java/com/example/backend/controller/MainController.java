package com.example.backend.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@CrossOrigin("https://ecommerce-app-a01c3.web.app"
@CrossOrigin("http://localhost:4200")

@RequestMapping("api")
public class MainController {

    @GetMapping("/hello")
    public String sayHello(){
        return "Hello";
    }

}
