import cardsController from '../controllers/cardsController.js';
import express from 'express';
// import searchProducts from '../controllers/productController.js';
// import searchRawCards from '../controllers/rawCardController.js';

const router = express.Router();

router.get("/cards", cardsController.fetchCards, (req, res) => {
  //console.log('res locals cardData --->', res.locals.cardData)
  res.status(200).json(res.locals.cardData)
});

//new route to get individual card
router.get("/cards/:cardId", cardsController.fetchCard, (req, res) => {
  res.status(200).json(res.locals.cardData);
});

router.get("/portfolio", cardsController.fetchCardsInPortfolio, (req, res) => {
  res.status(200).json(res.locals.portfolioData)
});

router.post("/portfolio", cardsController.addToPortfolio, (req, res) => {
  res.status(201).json(res.locals.newItemToPortfolio)
});





export default router;