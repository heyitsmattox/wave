import dotenv from "dotenv"; 
dotenv.config(); 
import express from 'express';
import cors from 'cors';
import searchRoutes from "./routes/searchRoutes.js";

console.log("API Key in server.js file:", process.env.PRICECHARTING_API_KEY);
const app = express();


app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use("/api", searchRoutes)


const portNumber = 5011;
app.listen(portNumber, () => {
  console.log(`Server is running on port ${portNumber}`);
});
