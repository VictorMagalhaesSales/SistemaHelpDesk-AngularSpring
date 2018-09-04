package com.example.demo.entity;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import com.example.demo.enums.ProfileEnum;

@Document
public class User {

	@Id
	private String id;
	
	@Indexed(unique = true)
	@NotBlank(message = "Email requerido")
	@Email(message = "Email inválido")
	private String email;
	
	@NotBlank(message = "Senha requerida")
	@Size(min = 6)
	private String password;
	
	private ProfileEnum profile;
	
	// GET AND SET =-=-=-

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public ProfileEnum getProfile() {
		return profile;
	}

	public void setProfile(ProfileEnum profile) {
		this.profile = profile;
	}
	
	
	
}
