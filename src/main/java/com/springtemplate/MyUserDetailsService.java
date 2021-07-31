package com.springtemplate;

import java.util.ArrayList;

import com.springtemplate.dao.UserDao;
import com.springtemplate.models.UserModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserDao userDao;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel user;

        user = this.userDao.findUserByUserName(username);

        if (user == null) {
            throw new UsernameNotFoundException("User " + username + " does not exist");
        }
        return new User(user.getUsername(), user.getPassword(), new ArrayList<>());
    }
}