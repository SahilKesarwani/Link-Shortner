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

	// Check if Full Link is valid
	if (validUrl.isUri(fullLink)) {
		try {
			// Check if Full Link is already available
			const link = await ShortLink.findOne({ fullLink });
			if (link == null) {
				// Check if Short Link is available
				const shortenLink = await ShortLink.findOne({ shortLink: fullLink })
				if (shortenLink == null) {
					const shortLink = `${baseUrl}/${shortLinkCode}`;
					const newShortLink = new ShortLink({
						shortId: shortLinkCode,
						fullLink,
						shortLink,
					});

					await newShortLink.save();
					res.json(newShortLink);
				} else {
					res.json(shortenLink);
				}
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
