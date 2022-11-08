const express = require("express");
const app = express();
const port = 3000;

const component = require("./component");
const htmlContent = require("./render");

app.get("/", (req, res) => {
  res.send(htmlContent(component()));
});

app.listen(port, () => {
  console.log(`Listing to http://localhost:${port}/`);
});
