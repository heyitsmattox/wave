import usersController from "../controllers/usersController.js";
import express from 'express';

const router = express.Router();

//define our routes here
router.get('/', (req, res) => {
  res.send('GET request to our homepage')
});

router.post("/", usersController.createUsers, (req, res) => {
  console.log(res.locals.newUser);
  res.status(201).json(res.locals.newUser);
})

export default router;
