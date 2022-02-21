// const mongoose = require("mongoose");
const Schemas = require("../schemas/Schemas");
const bcrypt = require("bcryptjs");

// mongoose.connect;

const create = async (dataToSave) => {
    // Finding if email exists and insert only then.
    return new Promise((resolve, reject) => {
        let allCreds = true;
        Object.values(dataToSave).forEach((elem, index) => {
            if (allCreds && (!elem || elem.length < 1)) {
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
                    // HASH the password for safety
                    const { password } = dataToSave;
                    dataToSave["password"] = bcrypt.hashSync(password, 10);
                    const user = new Schemas.User(dataToSave);
                    await user.save();
                    resolve({ status: true, message: "New user created" });
                } else {
                    reject({ status: false, message: "unknown" });
                }
            });
        }
    });
};

const read = (loginData) => {
    return new Promise((resolve, reject) => {
        let allCreds = true;
        Object.values(loginData).forEach((elem, index) => {
            if (allCreds && (!elem || elem.length < 1)) {
                allCreds = false;
                resolve({ status: false, message: "incomplete" });
            }
        });

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
		if (allCreds) {
			Schemas.User.findOne({ email: loginData.email }, async (err, docs) => {
				if (err) {
					resolve({ status: false, message: "unknown" });
				}

				if (docs.length === 0) {
					resolve({ status: false, message: "not found" });
				} else {
					const thisUser = docs;
					const passwordMatches = bcrypt.compareSync(loginData.password, thisUser["password"]);
					if (passwordMatches) {
						resolve({ status: true, user: thisUser });
					} else {
						resolve({ status: false, message: "not exists" });
					}
				}
			});
		}
	});
=======
        if (allCreds) {
            Schemas.User.find({ email: loginData.email }, async (err, docs) => {
                if (err) {
                    resolve({ status: false, message: "unknown" });
                }

=======
        if (allCreds) {
            Schemas.User.find({ email: loginData.email }, async (err, docs) => {
                if (err) {
                    resolve({ status: false, message: "unknown" });
                }

>>>>>>> 1bbcb28bd68f846dbc95df029f6c75d14fb99f43
=======
        if (allCreds) {
            Schemas.User.find({ email: loginData.email }, async (err, docs) => {
                if (err) {
                    resolve({ status: false, message: "unknown" });
                }

>>>>>>> 1bbcb28bd68f846dbc95df029f6c75d14fb99f43
                if (docs.length === 0) {
                    resolve({ status: false, message: "error" });
                } else {
                    const thisUser = docs[0];
                    const passwordMatches = bcrypt.compareSync(loginData.password, thisUser["password"]);
                    if (passwordMatches) {
                        resolve({ status: true, message: "User Found", thisUser });
                    } else {
                        resolve({ status: false, message: "error" });
                    }
                }
            });
        }
    });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1bbcb28bd68f846dbc95df029f6c75d14fb99f43
=======
>>>>>>> 1bbcb28bd68f846dbc95df029f6c75d14fb99f43
=======
>>>>>>> 1bbcb28bd68f846dbc95df029f6c75d14fb99f43
};

const update = () => {
    //
};

const remove = () => {
    //
};

module.exports = { create, read, update, remove };
