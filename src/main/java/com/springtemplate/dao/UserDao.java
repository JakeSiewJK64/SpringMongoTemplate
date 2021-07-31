package com.springtemplate.dao;

import com.springtemplate.models.UserModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao {
    private MongoTemplate mongoTemplate;

    // TODO: Create a bean for MongoTemplate to inject dependency
    @Autowired
    public void setMongoTemplate(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    public UserModel findUserByUserName(String username) {
        UserModel user = mongoTemplate.findOne(new Query(new Criteria("UserName").is(username)), UserModel.class);
        return user;
    }
}
