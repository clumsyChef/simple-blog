const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	email: String,
	username: String,
	password: String,
});

const postSchema = new mongoose.Schema({
	username: String, // Post Owner
	title: String,
	body: String,
});

const commentSchema = mongoose.Schema({
	username: String, // Comment Owner
	postId: String, // ID of post which has this as a comment
	body: String,
});