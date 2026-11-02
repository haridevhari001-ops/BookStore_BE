const express = require('express')


const jwtMiddle = require('../Middleware/jwtMiddleware')

const multerMiddleware = require("../Middleware/multerMiddleware")

const userController = require('../controllers/userController')
const bookController = require('../controllers/bookController')

const router = new express.Router()

router.post('/register', userController.userRegister)
router.post('/login', userController.userLogin)
router.post('/google-auth', userController.googleLogin)


router.put('/profile-edit/:id', jwtMiddle, multerMiddleware.single("picture"), userController.profileEdit);
// route
router.post('/books/bid', jwtMiddle, multerMiddleware.array("uploadImage", 3), bookController.addBook)
router.get('/latest-books', jwtMiddle, bookController.latestBook)
router.get('/booklist', jwtMiddle, bookController.bookList)
router.get('/user-books', jwtMiddle, bookController.userAddedBooks);
router.delete('/delete-book/:bid', jwtMiddle, bookController.deleteAddedBook);
router.get('/purchased-books', jwtMiddle, bookController.purchasedBookList)


module.exports = router