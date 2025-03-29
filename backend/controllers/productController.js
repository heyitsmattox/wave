import fetch from 'node-fetch';
import dotenv from "dotenv";

dotenv.config(); // load our env variables

console.log("Loaded API Key:", process.env.PRICECHARTING_API_KEY); // Add this line


const searchProducts = async (req, res) => {
  const API_KEY = process.env.PRICECHARTING_API_KEY;
  const query = req.query.q;

  console.log("Received request with query:", query); //keep

  const url = `https://www.pricecharting.com/api/product?t=${API_KEY}&q=${query}`;
  console.log("Sending request to PriceCharting API:", url);
  try {
    const response = await fetch(url);
    const rawText = await response.text();

    if (response.ok) {
      const data = JSON.parse(rawText);
      console.log("Parsed API Data:", data);
      res.json(data);

    } else {
      console.error("PriceCharting API Error:", response.status, rawText);
      res.status(response.status).json({ error: "Error fetching data from PriceCharting API", details: rawText });
    }
  } catch (error) {
    console.error("Error fetching from PriceCharting API", error);
    res.status(500).json({ error: "Error fetching data from PriceCharting API" });
  }
};

export default searchProducts;