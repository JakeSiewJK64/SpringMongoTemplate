package com.springtemplate;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        super.configure(auth);
    }

    // todo: Authorization
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                // for admin page
                .antMatchers("/admin").hasRole("ADMIN")
                // for admin and users
                .antMatchers("/user").hasAnyRole("ADMIN", "USER")
                // allow all
                .antMatchers("/").permitAll().and().formLogin();
    }
}
