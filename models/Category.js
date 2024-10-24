const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({
    id: {
        type: Number,
    },
    ar: {
        type: String,
    },
    bn: {
        type: String,
    },
    en: {
        type: String,
    }
}, { timestamps: true })

const Category = mongoose.model('Category', categorySchema)
module.exports = Category