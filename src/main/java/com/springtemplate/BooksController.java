package com.springtemplate;

import java.util.List;

import com.springtemplate.dao.BookDao;
import com.springtemplate.models.Book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class BooksController {

    @Autowired
    private BookDao bookDao;

    // TODO: Declare bean for book dao
    @Autowired
    private void setBookDao(BookDao bookDao) {
        this.bookDao = bookDao;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getAllBooks")
    private List<Book> getAllBooks() {
        return this.bookDao.getAllBooksQuery();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/upsertBook")
    private String upsertBook(@RequestBody Book book) {
        return this.bookDao.upsertBookCommand(book);
    }
}
