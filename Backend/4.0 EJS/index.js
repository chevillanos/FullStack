import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  var data = { greeting: "" };
  const today = new Date();
  const dayNumber = today.getDay();
  if (dayNumber === 0 || dayNumber === 6) {
    data.greeting = "Hey! It's a weekend, it's time to have fun!";
  } else {
    data.greeting = "Hey! It's a weekday, it's time to work hard!";
  }
  res.render("index", data);
});
