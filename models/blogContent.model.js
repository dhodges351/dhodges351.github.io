var mongoose = require('mongoose');

const BlogContentSchema = mongoose.Schema({
    image: { type: String, required: false },
    title: { type: String, required: true },
    category: { type: String, required: true },
    content: { type: String, required: true },
    currentBlog: { type: Boolean, required: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('blogcontents', BlogContentSchema);

