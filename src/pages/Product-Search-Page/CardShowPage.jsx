import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CardFinder from "../../../backend/apis/CardFinder.js";
import axios from 'axios';

const CardShowPage = () => {
  const { cardId } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        console.log("Fetching card with ID:", cardId); 
        //const response = await axios.get(`http://localhost:5011/api/cards/${cardId}`);
        //old way --> utilize our CardFinder api instance
        const response = await CardFinder.get(`/${cardId}`);
        console.log("Card response:", response.data); 
        setCard(response.data);
      } catch (error) {
        console.error("Error fetching card:", error);
      } 
    };

    fetchCard();
  }, [cardId]);

  console.log('card data in cardShowPage:', card)


  return (
    <div>
      <h1>Card Details</h1>
    </div>
  );
};

export default CardShowPage;