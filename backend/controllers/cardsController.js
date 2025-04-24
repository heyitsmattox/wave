import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

console.log("Pokemon  TCG API key loaded:", process.env.POKEMON_TCG_API_KEY);

const API_KEY = process.env.POKEMON_TCG_API_KEY;
const pageSize = 6;

const cardsController = {
  fetchCards: async (req, res, next) => {
    try {
      const { q } = req.query;
      const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=${encodeURIComponent(q)}&pageSize=${pageSize}`, {
        headers: {
          'X-Api-Key': API_KEY, 
        }
      });
    
      if (!response.ok) {
        throw new Error(`TCG API error: ${response.status}`);
      }
    
      const data = await response.json();
      res.locals.cardData = data;
      console.log("TCG API response received:", data);
    
      res.json(data);
    } catch (error) {
      console.error("Error fetching from TCG API:", error.message);
      res.status(500).json({ error: "Failed to fetch cards from Pokémon TCG API" });
    }

  }
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
