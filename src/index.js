const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Health
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

/**
 * 1) GET /hello?name=Ceren
 * 2) POST /hello  { "name": "Ceren" }
 * Her iki durumda da "Hello, Ceren!" döner.
 */
app.get("/hello", (req, res) => {
    const name = req.query.name || "World";
    res.json({ message: `Hello, ${name}!` });
});

app.post("/hello", (req, res) => {
    const name = req.body?.name || "World";
    res.json({ message: `Hello, ${name}!` });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`🚀 API running at http://localhost:${PORT}`);
});
