import express from "express";
const app = express();
const port = 3000;

app.listen(port, serverIsRunning);

function serverIsRunning() {
  console.log(`Server is running on http://localhost:${port}`);
}

app.get("/", requestResponseDemo);

function requestResponseDemo(req, res) {
  console.log(req.method);
  res.send("This is the response from the server.");
}
