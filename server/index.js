import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import trips from "./db.js"; 

const app = express();

app.use(cors()); // เปิดให้ทุก origin ใช้
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello from Vercel Backend!");
});

// API ค้นหาทริป
app.get("/trips", (req, res) => {
  const keywords = req.query.keywords;

  if (!keywords) {
    return res.status(400).json({
      message: "Please send keywords parameter in the URL endpoint",
    });
  }

  console.log("Available trips:", trips); 

  const regexKeywords = keywords.split(" ").join("|");
  const regex = new RegExp(regexKeywords, "ig");

  const results = trips.filter((trip) =>
    trip.title.match(regex) ||
    trip.description.match(regex) ||
    trip.tags.some((tag) => tag.match(regex))
  );

  return res.json({ data: results });
});


export default app;
