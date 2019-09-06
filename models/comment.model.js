var mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    blogPostId: { type: String, required: true },
    author: { type: String, required: true },
    comment: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('comments', CommentSchema);

