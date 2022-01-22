const express = require("express");
const router = express.Router();

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
	res.status(200).json({ status: "SHIT FOUND " });
});

module.exports = router;
