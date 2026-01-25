import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const body = req.body;
  const formData = {
    fName: body.fName,
    lName: body.lName,
  };
  // console.log(formData);
  res.render("index.ejs", { formData: formData });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
