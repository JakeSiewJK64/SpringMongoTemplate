package com.springtemplate.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Users")
public class UserModel {
    @Id
    private String id;

    @Field("UserName")
    private String username;

    @Field("Password")
    private String password;

    @Field("PhoneNumber")
    private String phonenumber;

    @Field("Role")
    private Integer role;

    public UserModel(String id, String username, String password, String phonenumber, Integer role) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.phonenumber = phonenumber;
        this.role = role;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhonenumber() {
        return this.phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public Integer getRole() {
        return this.role;
    }

    public void setRole(Integer role) {
        this.role = role;
    }
}
