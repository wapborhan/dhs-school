const mongoose = require('mongoose');
const hadithSchema = mongoose.Schema({
    id: {
        type: Number,
    },
    hadith_id: {
        type: Number,
    },
    hadith_key: {
        type: String,
    },
    book_id: {
        type: Number,
    },
    book_name: {
        type: String,
    },
    section_id: {
        type: Number,
    },
    chapter_id: {
        type: Number,
    },
    ar: {
        type: String,
    },
    ar_diacless: {
        type: String,
    },
    bn: {
        type: String,
    },
    grade: {
        type: String,
    },
    grade_color: {
        type: String,
    },
    grade_id: {
        type: Number,
    },
    narrator: {
        type: String,
    },
    note: {
        type: String,
    }
}, { timestamps: true })

const Hadith = mongoose.model('Hadith', hadithSchema)
module.exports = Hadith