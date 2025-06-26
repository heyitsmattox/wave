import fetch from "node-fetch";
import dotenv from "dotenv";
import createHttpError from "http-errors";
import db from "../database/db.js";

dotenv.config();

console.log("Pokemon  TCG API key loaded:", process.env.POKEMON_TCG_API_KEY);

const API_KEY = process.env.POKEMON_TCG_API_KEY;
const pageSize = 9; //keep at 1 for testing purposes.

const cardsController = {
  fetchCards: async (req, res, next) => {
    try {
      const { q } = req.query;
      const response = await fetch(
        `https://api.pokemontcg.io/v2/cards?q=${encodeURIComponent(
          q
        )}&pageSize=${pageSize}`,
        {
          headers: {
            "X-Api-Key": API_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`TCG API error: ${response.status}`);
      }

      const cardData = await response.json();
      res.locals.cardData = cardData;
      console.log("TCG API response received:", cardData);

      next();
    } catch (error) {
      return next(
        createHttpError(
          400,
          "Could not fetch cards in cardsController.fetchCards"
        )
      );
    }
  },
  fetchCard: async (req, res, next) => {
    try {
      const { cardId } = req.params;
      const response = await fetch(
        `https://api.pokemontcg.io/v2/cards/${cardId}`,
        {
          headers: {
            "X-Api-Key": API_KEY,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`TCG API error: ${response.status}`);
      }
      const card = await response.json();
      console.log("Single card response:", card);

      res.locals.cardData = card;
      next();
    } catch (error) {
      console.error("Error fetching individual card:", error.message);
      next(error);
    }
  },
  //create our create method
  addToPortfolio: async ( req, res, next) => {
    const {product_id, qty } = req.body;
    const user_id = res.locals.newUser.id;

    // Input validation
    if (!product_id || !qty || qty < 1) {
      return next(createHttpError(400, 'Invalid input: product_id and positive qty are required'));
    }

    const command = `INSERT INTO portfolio_items (user_id, product_id, qty) VALUES ($1, $2, $3) RETURNING *`;
    const values = [ user_id, product_id, qty ];
    try {
      //should add our new item to our database
      const newItemToPortfolio = await db.query(command, values)
      //adding new item to our res.locals object
      res.locals.newItemToPortfolio = newItemToPortfolio.rows[0];
      console.log("new item added", res.locals.newItemToPortfolio)
      return next();
    } catch (error) {
      console.error("Error adding item to portfolio", error.message)
      next(error)
    }
  },
  fetchCardsInPortfolio: async (req, res, next) => {
    try {
      const user_id = res.locals.newUser.id;
      const command = `SELECT * FROM portfolio_items WHERE user_id = $1`;
      const { rows } = await db.query(command, [user_id]);
      console.log("Items in portfolio:", rows);
      res.locals.portfolioData = rows;
      return next();
    } catch (error) {
      console.error("Failed to fetch portfolio items:", error.message);
      return next(createHttpError(500, 'Failed to fetch portfolio items'));
    }
  }

};

export default cardsController;

//TODO
//create a method that saves the individual card to our database
//create a route to utilize that new method we created
//make a call to our api once the user clicks on the plus button
