import dotenv from "dotenv"; 
dotenv.config(); 
import express from 'express';
import cors from 'cors';
// import fetch from 'node-fetch';
import searchRoutes from "./routes/searchRoutes.js";

console.log("API Key in server.js file:", process.env.PRICECHARTING_API_KEY);
const app = express();


app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use("/api", searchRoutes)


//added this middleware to check that a query was indeed added in the search input box.
// const validateQueryInput = (req, res, next) => {
//   const { q } = req.query;

//   if(!q) {
//     return res.status(400).json({error: "A query is required."})
//   }
//   next();
// };


//made a change on line 28 with validQueryInput
// app.get('/api/search', async (req, res) => {
//   const API_KEY = process.env.PRICECHARTING_API_KEY;
//   const query = req.query.q;
  
//   console.log("Received request with query:", query); //keep

//   const url = `https://www.pricecharting.com/api/product?t=${API_KEY}&q=${query}`;
//   console.log("Sending request to PriceCharting API:", url);

//   try {
//     const response = await fetch(url);
  
//     const rawText = await response.text();
    
//     if (response.ok) {
//       const data = JSON.parse(rawText);
//       console.log("Parsed API Data:", data);
//       res.json(data);
//     } else {
//       console.error("PriceCharting API Error:", response.status, rawText);
//       res.status(response.status).json({ error: "Error fetching data from PriceCharting API", details: rawText });
//     }
//   } catch (error) {
//     console.error("Error fetching from PriceCharting API", error);
//     res.status(500).json({ error: "Error fetching data from PriceCharting API" });
//   }
// });




const portNumber = 5011;
app.listen(portNumber, () => {
  console.log(`Server is running on port ${portNumber}`);
});
