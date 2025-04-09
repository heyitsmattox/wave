import express from 'express';
// import searchProducts from '../controllers/productController.js';
import searchRawCards from '../controllers/rawCardController.js';

const router = express.Router();

// router.get("/products/search", searchProducts);

router.get("/cards", searchRawCards);

export default router;