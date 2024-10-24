const mongoose = require('mongoose');
const sectionSchema = mongoose.Schema({
    id: {
        type: Number,
    },
    section_id: {
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
    sort_order: {
        type: Number,
    },
    number: {
        type: String,
    },
    preface: {
        type: String,
    },
    title: {
        type: String,
    }
    
}, { timestamps: true })

const Section = mongoose.model('Section', sectionSchema)
module.exports = Section