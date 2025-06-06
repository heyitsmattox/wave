// import fetch from "node-fetch";
// import dotenv from "dotenv";

// dotenv.config(); // load our env variables

// //console.log("Loaded API Key:", process.env.PRICECHARTING_API_KEY); // Add this line

// const searchProducts = async (req, res) => {
//   const API_KEY = process.env.PRICECHARTING_API_KEY;
//   const query = req.query.q;

//   console.log("Received request with query:", query); //keep

//   //update url to products once we are ready to display ~ 20 results.
//   const url = `https://www.pricecharting.com/api/products?t=${API_KEY}&q=${query}`;
//   console.log("Sending request to PriceCharting API:", url);
//   try {
//     const response = await fetch(url);
//     const rawText = await response.text();

//     if (response.ok) {
//       const data = JSON.parse(rawText);

//       //limiting the results to first 20
//       console.log("Full API Response:", JSON.stringify(data, null, 2));
//       if (data.products && Array.isArray(data.products)) {
//         data.products = data.products.slice(0, 12);
//       }
//       console.log("Parsed API Data:", data);
//       res.json(data);
//     } else {
//       console.error("PriceCharting API Error:", response.status, rawText);
//       res.status(response.status).json({
//         error: "Error fetching data from PriceCharting API",
//         details: rawText,
//       });
//     }
//   } catch (error) {
//     console.error("Error fetching from PriceCharting API", error);
//     res
//       .status(500)
//       .json({ error: "Error fetching data from PriceCharting API" });
//   }
// };

// export default searchProducts;
