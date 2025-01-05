const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from the project root
app.use(express.static(path.join(__dirname, "../")));

// Route for the homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
