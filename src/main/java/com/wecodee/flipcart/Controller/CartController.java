package com.wecodee.flipcart.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.wecodee.flipcart.Entity.Cart;
import com.wecodee.flipcart.Service.CartService;
import com.wecodee.flipcart.dto.CartResponse;
import com.wecodee.flipcart.dto.Login;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CartController {

	@Autowired
	private CartService cartService;

	// Save operation
	@PostMapping("/save")
	public String addCartController(@RequestBody Cart cart) {
		this.cartService.cartDetailsService(cart);
		return "Register Successfully";
	}

	// Get operation
	@GetMapping("/get")
	public List<Cart> getAllController() {
		return this.cartService.selectAllService();
	}

	// Login operation
	@PostMapping("/login")
	public CartResponse validateLoginService(@RequestBody Login login) {
		return this.cartService.loginService(login);
	}

}

// Retrieve operation
//	@GetMapping("/get/{id}")
//	public Cart getController(@PathVariable int id) 
//	{
//		return this.cartService.selectService(id);

//	}

//    Retrieve all operation
//    @GetMapping("/get")
//    public List<Cart> getAllController()
//    {
//    	return this.cartService.selectAllService();
// }

//	Update operation
//	@PutMapping("/update")
//  public Cart updateController(@RequestBody Cart cart)
//  {
//	  return cartService.updateService(cart);
//   }
//  	Delete operation
//	@DeleteMapping("/delete/{id}")
// public String deleteController(@PathVariable int id)
// {
// return this.cartService.deleteService(id);
// }
