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
        console.log("asd", loginData);
        if (loginData.status) {
            res.cookie("username", "done");
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
