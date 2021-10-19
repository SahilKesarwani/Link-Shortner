const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ShortLinkSchema = new Schema({
	shortId: {
		type: String,
		required: true,
	},
	fullLink: {
		type: String,
		required: true,
	},
	shortLink: {
		type: String,
		required: true,
	},
	clicks: {
		type: Number,
		required: true,
		default: 0,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = ShortLink = mongoose.model("shortlink", ShortLinkSchema);
