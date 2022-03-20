const User = require("../models/Users");

const createUser = async (req, res) => {
	try {
		const { email, username, password } = req.body;
		const dataToSave = { email, username, password };
		const savingData = await User.create(dataToSave);
		res.status(200).send(savingData);
	} catch (err) {
		res.status(404).send(err);
	}
};

const readUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		const userToLogin = { email, password };
		const loginData = await User.read(userToLogin);
		res.status(200).send(loginData);
	} catch (err) {
		res.status(404).send(err);
	}
};

const loggedUser = async (req, res) => {
	try {
		const access_token = req.body;
		const userData = await User.logged(access_token);
		console.log(userData);
	} catch (err) {
		//
	}
};

const updateUser = (req, res) => {
	//
};

const removeUser = (req, res) => {
	//
};

module.exports = { createUser, readUser, updateUser, removeUser, loggedUser };
