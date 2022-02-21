const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(function (req, res, next) {
    res.header("Content-Type", "application/json;charset=UTF-8");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
<<<<<<< HEAD
<<<<<<< HEAD

// cookies
=======
>>>>>>> 1bbcb28bd68f846dbc95df029f6c75d14fb99f43
=======
>>>>>>> 1bbcb28bd68f846dbc95df029f6c75d14fb99f43

// Connection to mongoose
mongoose.connect(
    "mongodb://localhost/blog-db",
    () => {
        console.log("CONNECTED Mongo");
    },
    (error) => {
        console.error(error);
    }
);

/* ------- Require Routes Start --------- */

// User Routes
const users = require("./routes/users");
app.use("/users", users);

// Blogs Routes
const blogs = require("./routes/blogs");
app.use("/blogs", blogs);

/* ------- Require Routes End --------- */

app.use((req, res) => {
    res.status(404).json({ status: false });
});

app.listen(5000, () => {
    console.log("CONNECTED");
});
