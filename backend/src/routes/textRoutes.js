import express from "express";
import fetch from "node-fetch";
const router = express.Router();

router.post("/check", async (req, res) => {
  const { text } = req.body;
  try {
    const response = await fetch("https://api.languagetool.org/v2/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: new URLSearchParams({
        text,
        language: "en-US",
        enabledOnly: "false",
      }),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error checking text" });
  }
});

export default router;
