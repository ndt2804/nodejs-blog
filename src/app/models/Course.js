const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Course = new Schema({
    name: {type: String, minLength:1, maxLength: 255},
    desciprtion: {type: String, maxLength: 255},
    image: {type: String, maxLength: 255},
    slug: { type: String, slug: 'name', unique: true},
    videoId: {type: String, maxLength: 255},
}, {
    timestamps: true,    
});

module.exports = mongoose.model('Course', Course);