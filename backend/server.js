const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// ✅ Add a GET route for `/`
app.get("/", (req, res) => {
    res.send("Server is running! 🚀");
});

// ✅ Add a POST route for `/chat`
app.post("/chat", (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: "Message is required" });
    }
    res.json({ response: `You said: ${message}` });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
