import dotenv from "dotenv"; 
dotenv.config(); 
import express from 'express';
import cors from 'cors';
import cardRoutes from "./routes/cardRoutes.js";
import errorHandler from "./middlewares/errorMiddleware.js";
import usersRouter from "./routes/usersRoutes.js";

console.log("TCG API Key from server file:", process.env.POKEMON_TCG_API_KEY);
const app = express();
app.use(express.json()); //allow our server  to receive json data

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(errorHandler)
app.use("/api", cardRoutes)
//user router for when the client gets to the endpoint on any request.
app.use('/api/v1/users', usersRouter);






const portNumber = 5011;
app.listen(portNumber, () => {
  console.log(`Server is running on port ${portNumber}`);
});

export default app;
