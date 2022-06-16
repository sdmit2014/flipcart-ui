package com.wecodee.flipcart.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.wecodee.flipcart.Entity.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {

	public Cart findByUsername(String username);

}
