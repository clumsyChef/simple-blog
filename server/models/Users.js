// const mongoose = require("mongoose");
const Schemas = require("../schemas/Schemas");
const bcrypt = require("bcryptjs");

// mongoose.connect;

const create = async (dataToSave) => {
	// Finding if email exists and insert only then.
	return new Promise((resolve, reject) => {
		let allCreds = true;
		Object.values(dataToSave).forEach((elem, index) => {
			if (!elem || elem.length < 1) {
				allCreds = false;
				resolve({ status: false, message: "incomplete" });
			}
		});

		if (allCreds) {
			Schemas.User.find({ email: dataToSave.email }, async (err, docs) => {
				if (err) {
					resolve({ status: false, message: "invalid_credentials" });
					throw err;
				}

				if (docs.length > 0) {
					resolve({ status: false, message: "user_exists" });
				} else if (docs.length === 0) {
					const { password } = dataToSave;
					dataToSave["password"] = bcrypt.hashSync(password, 10);
					const user = new Schemas.User(dataToSave);
					const saved = await user.save();
					resolve({ status: true, message: "New user created" });
				} else {
					reject({ status: false, message: "unknown" });
				}
			});
		}
	});
};

const read = () => {
	//
};

const update = () => {
	//
};

const remove = () => {
	//
};

module.exports = { create, read, update, remove };
