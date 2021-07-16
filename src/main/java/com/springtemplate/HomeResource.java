package com.springtemplate;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeResource {
    @GetMapping("/hello")
    public String hello() {
        return "hello world";
    }
}
