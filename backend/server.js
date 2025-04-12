import dotenv from "dotenv"; 
dotenv.config(); 
import express from 'express';
import cors from 'cors';
import searchRoutes from "./routes/searchRoutes.js";
import errorHandler from "./middlewares/errorMiddleware.js";

console.log("TCG API Key from server file:", process.env.POKEMON_TCG_API_KEY);
const app = express();
app.use(express.json()); //allow our server  to receive json data

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(errorHandler)
app.use("/api", searchRoutes)


app.us

const portNumber = 5011;
app.listen(portNumber, () => {
  console.log(`Server is running on port ${portNumber}`);
});

export default app;
