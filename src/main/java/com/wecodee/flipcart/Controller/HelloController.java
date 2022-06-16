package com.wecodee.flipcart.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class HelloController {
	
	
	@GetMapping("/say")
	public String sayHello() {
		return "Hello Swagger";
	}

}
