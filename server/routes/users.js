const express = require("express");
const router = express.Router();

const { createUser, readUser, updateUser, removeUser } = require("../controllers/userController");

const logger = (req, res, next) => {
    console.log(req.originalUrl);
    next();
};
router.use(logger);

router.get("/", (req, res, next) => {
    res.status(200).json({ status: "SHIT FOUND " });
});

router.get("/:id", (req, res, next) => {
    console.log(req.params);
    res.status(200).json({ status: `SHIT FOUND with id  -> ${req.params.id}` });
});

router.post("/signup", (req, res, next) => {
    createUser(req, res);
});

router.post("/login", (req, res, next) => {
    readUser(req, res);
});

module.exports = router;
