const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {
  res.redirect(303, "https://userenrollment-vercel.vercel.app/.well-known/com.apple.remotemanagement");
});

module.exports = router;
