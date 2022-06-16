package com.wecodee.flipcart.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Cart_Table")
public class Cart {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(name = "Username")
	private String username;

	@Column(name = "Password")
	private String password;

	@Column(name = "Mobilenumber")
	private String mobilenumber;

	public Cart() {

	}

	public Cart(int id, String username, String password, String mobilenumber) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.mobilenumber = mobilenumber;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobilenumber() {
		return mobilenumber;
	}

	public void setMobilenumber(String mobilenumber) {
		this.mobilenumber = mobilenumber;
	}

	@Override
	public String toString() {
		return "Cart [id=" + id + ", username=" + username + ", password=" + password + ", mobilenumber=" + mobilenumber
				+ "]";
	}

}
