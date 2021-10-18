const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const ShortLink = require("./models/ShortLink");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
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

app.get("/", (req, res) => {
	ShortLink.find()
		.then(shortLinks => res.json(shortLinks))
		.catch(err => res.status(404).json({ message: "ShortLins were not found." }));
});

app.post("/", (req, res) => {
	const newShortLink = new ShortLink({
		fullLink: req.body.fullLink,
	});

	newShortLink
		.save()
		.then(shortLink => res.json(shortLink))
		.catch(err => res.status(404).json({ message: "ShortLink was not saved." }));
});

app.get("/:shortLink", async (req, res) => {
	const shortLink = req.params.shortLink;
	const link = await ShortLink.findOne({ shortLink });
	if (link == null) return res.sendStatus(404);

	link.clicks++;
	link.save();

	res.redirect(link.fullLink);
});

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
	// Set static folder
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

app.listen(PORT, () => {
	console.log(`Server is running at port ${PORT}`);
});
