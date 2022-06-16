package com.wecodee.flipcart.dto;

import com.wecodee.flipcart.Entity.Cart;

public class CartResponse extends CommonResponse {

	private Cart cart;

	public CartResponse() {

	}

	public CartResponse(EnumData response, String message, Cart cart) {
		super(response, message);
		this.cart = cart;
	}

	public Cart getCart() {
		return cart;
	}

	public void setCart(Cart cart) {
		this.cart = cart;
	}

	@Override
	public String toString() {
		return "CartResponse [cart=" + cart + "]";
	}

}
