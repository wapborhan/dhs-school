const mongoose = require('mongoose');
const validitySchema = mongoose.Schema({
    id: {
        type: Number,
    },
    sort_order: {
        type: Number,
    },
    superType_id: {
        type: String,
    },
    background: {
        type: String,
    },
    color: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    }
}, { timestamps: true })

const Validity = mongoose.model('Validity', validitySchema)
module.exports = Validity