const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.status(200).json({
    message: "server running!",
  });
});

app.get("/", (req, res) => {
  return res.status(200).json({ app: "server running!", version: "1.0.0" });
});

module.exports = app;
