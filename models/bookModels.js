
const mongoose = require('mongoose')

const bookScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true

    },
    noOfPages: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        default:""
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    abstract: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    uploadImage: {
        type: Array,
        required: true
    },
    sellerMail: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    },
    buyerMail: {
        type: String,
        default: ""
    }

})

const books = mongoose.model('books',bookScheme)

module.exports = books

