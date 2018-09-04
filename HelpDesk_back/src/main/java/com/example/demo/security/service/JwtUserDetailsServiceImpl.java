package com.example.demo.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.security.jwt.JwtUserFactory;
import com.example.demo.service.UserService;

@Service
public class JwtUserDetailsServiceImpl implements UserDetailsService{

	@Autowired
	private UserService userService;

	// MÉTODO QUE CARREGA O USUÁRIO E RETORNA DEPOIS DO FACTORY
	@Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User user = userService.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException(String.format("Não foram encontrados usuarios com esse username '%s'.", email));
        } else {
            return JwtUserFactory.create(user);
        }
    }


	
	
}
