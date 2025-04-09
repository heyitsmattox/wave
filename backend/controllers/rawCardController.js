import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

console.log("Pokemon  TCG API key loaded:", process.env.POKEMON_TCG_API_KEY);

const searchRawCards = async (req, res) => {
const API_KEY = process.env.POKEMON_TCG_API_KEY;
const query = req.query.q;
const pageSize = 2;


  try {
    const { q } = req.query;
    //fetch(`https://api.pokemontcg.io/v2/cards?q=${encodeURIComponent(q)}`

    const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=${encodeURIComponent(q)}&pageSize=${pageSize}`, {
      headers: {
        'X-Api-Key': API_KEY, 
      }
    });

    if (!response.ok) {
      throw new Error(`TCG API error: ${response.status}`);
    }

    const data = await response.json();
    console.log("TCG API response received:", data);

    res.json(data);
  } catch (error) {
    console.error("Error fetching from TCG API:", error.message);
    res.status(500).json({ error: "Failed to fetch cards from Pokémon TCG API" });
  }
};


export default searchRawCards;