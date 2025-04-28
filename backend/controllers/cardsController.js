import fetch from "node-fetch";
import dotenv from "dotenv";
import createHttpError from "http-errors";

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
};

export default cardsController;

//TODO
//1. Rewrite our rawCardController in a similar format as our usersController
//2. Update the current state to be inside the method of fetchRawCards
//3. create an getSingleCard method inside of our rawCardController
//look into route parameters

//4. we can use that route as we'll be obtaining the id of the card
//5. We can then select each individual card -> take them to the new route
//6. display the individual raw card component
