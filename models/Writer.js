const mongoose = require('mongoose')
const writerSchema = mongoose.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    
}, { timestamps: true })

const Writer = mongoose.model('Writer', writerSchema)
module.exports = Writer