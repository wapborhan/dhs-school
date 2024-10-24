const mongoose = require('mongoose');
const chapterSchema = mongoose.Schema({
    id: {
        type: Number,
    },
    number: {
        type: Number,
    },
    book_id: {
        type: Number,
    },
    book_name: {
        type: String,
    },
    chapter_id: {
        type: Number,
    },
    hadis_range: {
        type: String,
    },
    title: {
        type: String,
    },

}, { timestamps: true })

const Chapter = mongoose.model('Chapter', chapterSchema)
module.exports = Chapter