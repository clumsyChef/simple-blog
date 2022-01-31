const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	email: String,
	username: String,
	password: String,
});

const postSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: "userSchema" }, // Post Owner
	title: String,
	body: String,
});

const commentSchema = mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: "userSchema" }, // Comment Owner
	postId: { type: mongoose.Schema.Types.ObjectId, ref: "postSchema" }, // ID of post which has this as a comment
	body: String,
});

const allSchema = {
	User: mongoose.model("User", userSchema),
	Post: mongoose.model("Post", postSchema),
	Comment: mongoose.model("Comment", commentSchema),
};

module.exports = allSchema;
