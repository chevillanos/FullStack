import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log(`Logger: ${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
