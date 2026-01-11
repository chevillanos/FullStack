import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send(
    `This is the response from the server to the default ${req.method} method.`
  );
});

app.get("/contact", (req, res) => {
  res.send(`<h1>Contact Us</h1><p>This is the contact page.</p>`);
});

app.get("/about", (req, res) => {
  res.send(`<h1>About Us</h1><p>This is the about page.</p>`);
});
