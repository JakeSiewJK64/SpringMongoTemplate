package com.springtemplate.dao;

import java.util.List;

import com.springtemplate.models.Book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class BookDao {
    private MongoTemplate mongoTemplate;

    // TODO: Create a bean for MongoTemplate for Dependency Injection
    @Autowired
    private void setMongoTemplate(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    public List<Book> getAllBooksQuery() {
        return mongoTemplate.findAll(Book.class);
    }

    public String upsertBookCommand(Book book) {
        return mongoTemplate.save(book, "Books").getId();
    }
}
