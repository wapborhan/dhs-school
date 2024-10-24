const mongoose = require('mongoose');
const subCategorySchema = mongoose.Schema({
    id: {
        type: Number,
    },
    cat_id: {
        type: Number,
    },
    bn: {
        type: String,
    }
    
}, { timestamps: true })

const SubCategory = mongoose.model('SubCategory', subCategorySchema)
module.exports = SubCategory