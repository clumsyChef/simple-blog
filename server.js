const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* ------- Require Routes Start --------- */

// User Routes
const users = require("./routes/users");
app.use("/users", users);

// Blogs Routes
const blogs = require("./routes/blogs");
app.use("/blogs", blogs);

// Auth Routes
const auth = require("./routes/auth");
app.use("/auth", auth);

/* ------- Require Routes End --------- */

app.use((req, res) => {
    res.status(404).json({ status: false });
});

app.listen(5000, () => {
    console.log("CONNECTED");
});
