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
		console.log(loginData);
		let userEmail = loginData.email;
		if (loginData.status) {
			console.log("setting cookies");
			res.cookie("token", userEmail, {
				httpOnly: false, // try this
			});
		}
		res.status(200).send(loginData);
	} catch (err) {
		res.status(404).send(err);
	}
};

const updateUser = (req, res) => {
	//
};

const removeUser = (req, res) => {
	//
};

module.exports = { createUser, readUser, updateUser, removeUser };
