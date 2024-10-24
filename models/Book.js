const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    id: {
        type: Number,
    },
    book_name: {
        type: String,
    },
    title: {
        type: String,
    },
    title_ar: {
        type: String,
    },
    number_of_hadis: {
        type: Number,
    },
    abvr_code: {
        type: String,
    },
    color_code: {
        type: String,
    },
    book_descr: {
        type: String,
    },
    
}, { timestamps: true })

const Book = mongoose.model('Book', bookSchema)
module.exports = Book