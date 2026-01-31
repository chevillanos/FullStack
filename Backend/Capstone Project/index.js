import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var posts = [];

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const blogEntry = req.body.blogEntry;
  if (blogEntry && blogEntry.trim() !== "") {
    posts.unshift(blogEntry); // Add new entry to the beginning of the array
  } else {
    console.log("Empty blog entry submitted.");
  }
  res.render("index.ejs", { posts: posts });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
