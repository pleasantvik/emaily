const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({ hi: "Hello from express" });
});
app.listen(port, () => {
  console.log(`Everything is okay from server side on port ${port}`);
});
