// const mongoose = require("mongoose");
const Schemas = require("../schemas/Schemas");

// mongoose.connect;

const create = async (dataToSave) => {
	// Finding if email exists and insert only then.
	return new Promise((resolve, reject) => {
		Schemas.User.find({ email: dataToSave.email }, async (err, docs) => {
			if (err) {
				throw err;
			}

			if (docs.length > 0) {
				resolve({ status: false, message: "User already exists." });
			} else {
				const user = new Schemas.User(dataToSave);
				const saved = await user.save();
				resolve({ status: true, message: "New user created" });
			}
		});
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
