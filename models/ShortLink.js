const mongoose = require("mongoose");
const shortid = require("shortid");

const Schema = mongoose.Schema;

const ShortLinkSchema = new Schema({
	fullLink: {
		type: String,
		required: true,
	},
	shortLink: {
		type: String,
		required: true,
		default: shortid.generate,
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
