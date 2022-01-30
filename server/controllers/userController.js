const User = require("../models/Users");

const createUser = async (req, res) => {
	const { email, username, password } = req.body;
	const dataToSave = { email, username, password };
	const userData = await User.create(dataToSave);
	console.log(userData);
	// console.log(email, username, password);
};

const readUser = (req, res) => {
	//
};

const updateUser = (req, res) => {
	//
};

const removeUser = (req, res) => {
	//
};

module.exports = { createUser, readUser, updateUser, removeUser };
