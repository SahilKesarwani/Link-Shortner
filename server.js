const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

// DB Config
const db = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB Connected"))
	.catch(err => console.log(err));

// Define Routes
app.use("/", require("./routes/index"));
app.use("/api/link", require("./routes/link"));

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

/*
// Serve static assets if in production
if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
	// Set static folder
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}
*/

app.listen(PORT, () => {
	console.log(`Server is running at port ${PORT}`);
});
