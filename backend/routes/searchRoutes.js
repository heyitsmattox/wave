import express from 'express';
import searchProducts from '../controllers/productController.js';

const router = express.Router();

router.get("/products/search", searchProducts);

export default router;