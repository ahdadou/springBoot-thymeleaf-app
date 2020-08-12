package com.kingdongenuis;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ApplicationController {
	
	@GetMapping("/index")
	public String getHome() {
		return "index";
	}
	
	
	

}
