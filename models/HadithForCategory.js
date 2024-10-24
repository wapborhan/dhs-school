const mongoose = require('mongoose');
const hadithForCategorySchema = mongoose.Schema({
    id: {
        type: Number,
    },
    book_id: {
        type: Number,
    },
    cat_id: {
        type: Number,
    },
    subcat_id: {
        type: Number,
    },
    hadith_ar: {
        type: Number,
    },
    hadith_bn: {
        type: Number,
    },
    hadith_en: {
        type: Number,
    },
    hadith_indo: {
        type: Number,
    },
    hadith_ur: {
        type: Number,
    },
}, { timestamps: true })

const HadithForCategory = mongoose.model('HadithForCategory', hadithForCategorySchema)
module.exports = HadithForCategory