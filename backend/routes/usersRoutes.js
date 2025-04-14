import usersController from "../controllers/usersController.js";
import express from 'express';

const router = express.Router();

//define our routes here
router.get('/', (req, res) => {
  res.send('GET request to our homepage')
});

//define endpoint
//root path "/"
//Use express's router middleware to handle the HTTP request
router.post("/", usersController.createUsers, (req, res) => {
  //middleware function "createUsers" to help process requst, creates new user
  //adds the new user data to res.locals.newUser
  //important: res.locals is express's 
  // response object property for passing data between middleware
  console.log(res.locals.newUser);
  res.status(201).json(res.locals.newUser);
})

export default router;
