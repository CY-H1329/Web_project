const mongoose = require('mongoose')
const fs = require("fs");

const MotSchema = mongoose.Schema({
    authorID: {
        type: mongoose.Schema.Types.ObjectId
    },
    words: {
        type: Array,
        required: true,
        default: []
    },
});

module.exports = mongoose.model('Mots', MotSchema);