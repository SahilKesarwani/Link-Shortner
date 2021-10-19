const express = require("express");

const ShortLink = require("../models/ShortLink");
const router = express.Router();

// @route   GET /:shortId
// @desc    Redirect to original Link
router.get("/:shortId", async (req, res) => {
	try {
		const { shortId } = req.params;
		const link = await ShortLink.findOne({ shortId });
		if (link == null) return res.status(404).json({ message: "Link not found." });

		link.clicks++;
		link.save();

		res.redirect(link.fullLink);
	} catch (err) {
		res.status(500).json({ message: "Server error." });
	}
});

module.exports = router;
