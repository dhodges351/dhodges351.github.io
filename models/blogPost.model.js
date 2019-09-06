var mongoose = require('mongoose');

const BlogPostSchema = mongoose.Schema({
    category: String,
    title: String,
    short_desc: String,
    author: String,
    image: String
}, {
    timestamps: true
});

module.exports = mongoose.model('blogposts', BlogPostSchema);
