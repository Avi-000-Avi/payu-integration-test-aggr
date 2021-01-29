const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const  MONGOURI  = "mongodb+srv://toppo:gWwxmX0HemtPEQHR@cluster0.7dlp6.mongodb.net/<dbname>?retryWrites=true&w=majority";

// Connect MongoDB at default port 27017.
let mong = mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});