const express = require("express");
const shortId = require("shortid");
const validUrl = require("valid-url");
require("dotenv").config();

const ShortLink = require("../models/ShortLink");
const router = express.Router();

// @route   POST /api/link/short
// @desc    Create Short Url
router.post("/short", async (req, res) => {
	const { fullLink } = req.body;
	const baseUrl = process.env.baseUrl;

	// Check if baseUrl is valid
	if (!validUrl.isUri(baseUrl)) {
		return res.status(401).json({ message: "Invalid Base Url" });
	}

	// Generate the short id
	const shortLinkCode = shortId.generate();

	// Check if full Link is valid
	if (validUrl.isUri(fullLink)) {
		try {
			const link = await ShortLink.findOne({ fullLink });
			if (link == null) {
				const shortLink = `${baseUrl}/${shortLinkCode}`;
				const newShortLink = new ShortLink({
					shortId: shortLinkCode,
					fullLink,
					shortLink,
				});

				await newShortLink.save();
				res.json(newShortLink);
			} else {
				res.json(link);
			}
		} catch (err) {
			res.status(500).json({ message: "Server error" });
		}
	} else {
		res.status(401).json({ message: "Invalid Full Link." });
	}
});

module.exports = router;
