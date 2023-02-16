// routes/book.routes.js
const router = require('express').Router();

const Book = require('../models/Book.model.js'); // <== add this line before your routes

// GET route to retrieve and display all the books
router.get('/books', (req, res, next) => {
    Book.find()
        .then(allTheBooksFromDB => {
            // -> allTheBooksFromDB is a placeholder, it can be any word

            res.render('books/books-list.hbs', { books: allTheBooksFromDB });
        })
        .catch(error => {
            console.log('Error while getting the books from the DB: ', error);

            // Call the error-middleware to display the error page to the user
            next(error);
        });
});

router.get('/books/create', (req, res) => res.render('books/book-create.hbs'));

router.get('/books/:bookId', (req, res, next) => {

    //bookId => create
    const { bookId } = req.params;

    console.log('The ID from the URL is: ', bookId);

    Book.findById(bookId).then(book => {
        res.render('books/book-details.hbs', { book: book });
    }).catch(error => {
        console.log('Error while retrieving book details: ', error);
        // Call the error-middleware to display the error page to the user
        next(error);
    });

})

router.post('/books/create', (req, res) => {

    const { title, author, description, rating } = req.body;

    Book.create({ title, author, description, rating })
    // .then(bookFromDB => console.log(`New book created: ${bookFromDB.title}.`))
    .then(() => res.redirect('/books'))
    .catch(error => next(error));
});


module.exports = router;
