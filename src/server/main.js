import express from "express";

const app = express();

app.use(express.static(process.env.STATIC_FOLDER));

app.get("/", (req, res) => {
  res.send("hello " + process.env.NODE_ENV);
  console.log("hello " + new Date() + " " + process.env.NODE_ENV);
});

app.listen(3000);
