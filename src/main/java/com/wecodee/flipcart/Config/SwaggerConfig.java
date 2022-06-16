package com.wecodee.flipcart.Config;

import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
	
	@Bean
	public Docket swaggerApiConfig() {
	   return new Docket(DocumentationType.SWAGGER_2)
			   .select()
			   .paths(PathSelectors.any())
			   .apis(RequestHandlerSelectors.basePackage("com.wecodee"))
			   .build()
			   .apiInfo(apiInfo());
	}

	private ApiInfo apiInfo() {
		return new ApiInfo(
				"Swagger Api Example",
				"Api reference Example By Akash",
				"1.0.0",
				"Public API",
				new Contact(
						"Akash",
						"https://www.youtube.com",
						"restapi.gmail.com"),
				"API License Open",
				"https://www.youtube.com",
				
				Collections.emptyList());
	}

}
//http://localhost:8080/swagger-ui.html 

