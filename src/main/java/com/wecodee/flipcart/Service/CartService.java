package com.wecodee.flipcart.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wecodee.flipcart.Entity.Cart;
import com.wecodee.flipcart.Repository.CartRepository;
import com.wecodee.flipcart.dto.CartResponse;
import com.wecodee.flipcart.dto.Login;
import com.wecodee.flipcart.dto.EnumData;

@Service
public class CartService {

	@Autowired
	private CartRepository cartRepository;

	// Adding Service
	public Cart cartDetailsService(Cart cart) {
		return this.cartRepository.save(cart);
	}

	// Retrieve service
	public List<Cart> selectAllService() {
		return this.cartRepository.findAll();
	}

	// Login Service
	public CartResponse loginService(Login login) {
		System.out.println(login.getUsername());
		System.out.println(login.getPassword());

		Cart cart = this.cartRepository.findByUsername(login.getUsername());

		if (cart == null) {
			return new CartResponse(EnumData.FAILED, "User Not Present", null);
		} else {
			if (cart.getPassword().equals(login.getPassword())) {
				return new CartResponse(EnumData.SUCCESS, "Login successfully", null);
			} else {
				return new CartResponse(EnumData.FAILED, "Invalid Credentials", null);
			}
		}

	}

//	List<Cart> cart = this.cartRepository.findAll();
////long result = cart.stream().filter(car->car.getUsername().equals(login.getUsername()) && car.getPassword().equals(login.getPassword())).count();
// 
//    if(result==1) 
//  {
//	 return new CartResponse(Response.SUCCESS,"valid Credentials",null);
//  }
//  else 
//  {
//	 return new CartResponse(Response.FAILED,"Invalid Credentials",null);
//  }

}

//    Insert operation
//    public void insertService(Cart cart)
//    {
//		this.cartRepository.save(cart);
//	  }

//    Retrieve operation
//	  public Cart selectService(int id)
//	  {
//		Cart cart=this.cartRepository.findById(id).orElse(null);
//		return cart;
//	  }

//    Retrieve All operation
//    public List<Cart> selectAllService()
//    {
//    	return this.cartRepository.findAll();
//    }

//    Update operation
// public Cart updateService(Cart cart)
//    {
//    	Cart oldCart=null;
// Optional<Cart> optionalcart=cartRepository.findById(cart.getId());
// if (optionalcart.isPresent())
// {
//    	oldCart=optionalcart.get();
// oldCart.setName(cart.getName());
// oldCart.setPrice(cart.getPrice());
// cartRepository.save(oldCart);
// }else
// {
// return new Cart();
// }
//    	return oldCart;
// }

//    Delete operation
// public String deleteService(int id)
// {
// this.cartRepository.deleteById(id);
// return "Itom Got Deleted";
// }
