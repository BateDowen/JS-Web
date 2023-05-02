const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    paintingTech:{
        type: String,
        required: true,
        maxlength: 100
    },
    picture: {
        type: String,
        required: true,
        validate: /^https?:\/\//i
    },
    certificate:{
        type: String,
        required: true
    }
});

const Art = mongoose.model('Art', artSchema);

module.exports = Art;
