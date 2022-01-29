const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/userAuth");

const logger = (req, res, next) => {
	console.log(req.originalUrl);
	next();
};
router.use(logger);

module.exports = router;
