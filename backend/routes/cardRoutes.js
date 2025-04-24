import cardsController from '../controllers/cardsController.js';
import express from 'express';
// import searchProducts from '../controllers/productController.js';
// import searchRawCards from '../controllers/rawCardController.js';

const router = express.Router();

router.get("/cards", cardsController.fetchCards, (req, res) => {
  console.log(res.locals.cardData)
  res.status(200).json(res.locals.cardData)
});



//new route to get individual card

export default router;