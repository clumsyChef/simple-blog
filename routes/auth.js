const express = require("express");
const router = express.Router();

const logger = (req, res, next) => {
    console.log(req.originalUrl);
    next();
};
router.use(logger);

router.post("/", (req, res, next) => {
    //
});

module.exports = router;
