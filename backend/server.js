/* eslint-disable no-undef */
require('dotenv').config();


console.log("API Key:", process.env.PRICECHARTING_API_KEY);
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();


app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));



app.get('/api/search', async (req, res) => {
  const API_KEY = process.env.PRICECHARTING_API_KEY;
  const query = req.query.q;
  console.log("received request with query", query);


  const url = new URL(`https://www.pricecharting.com/api/product?t=${API_KEY}&q=${query}`);
  console.log("Sending request to PriceCharting API:", url.toString()); 
  // url.searchParams.append('t', API_KEY);
  // url.searchParams.append('q', query);

  console.log("Sending request to PriceCharting API:", url.toString()); // Log the final URL

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log("Fetched data from PriceCharting API", data); // Log the fetched data
      res.json(data); // Send the data back to the frontend
    } else {
      console.error("Error fetching from PriceCharting API", response.status);
      res.status(500).json({ error: 'Error fetching data from PriceCharting API' });
    }
  } catch (error) {
    console.error("Error fetching from PriceCharting API", error);
    res.status(500).json({ error: 'Error fetching data from PriceCharting API' });
  }
    // const response = await fetch(url);
    // res.json(data);
});

const portNumber = 5011;
app.listen(portNumber, () => {
  console.log(`Server is running on port ${portNumber}`);
});
