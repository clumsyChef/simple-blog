const User = require("../models/Users");

const createUser = async (req, res) => {
	try {
		const { email, username, password } = req.body;
		const dataToSave = { email, username, password };
		const savingData = await User.create(dataToSave);
		console.log("DATA dTa -> ", savingData);
		res.status(200).send(savingData);
	} catch (err) {
		res.status(404).send(err);
	}
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
