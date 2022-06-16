package com.wecodee.flipcart.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StatusController {
	
	@GetMapping("/app-status")
	public String DtStatus() {
		return "Digital Teller is Running";
	}

}
