import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CardFinder from "../../../backend/apis/CardFinder.js";
import Navbar from "../Navbar/index.jsx";

const CardShowPage = () => {
  const { cardId } = useParams();
  // const [state, setState] = useState<number | null>(null);
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        console.log("Fetching card with ID:", cardId);
        //const response = await axios.get(`http://localhost:5011/api/cards/${cardId}`);
        //old way --> utilize our CardFinder api instance
        const response = await CardFinder.get(`/${cardId}`);
        console.log("Card response:", response.data);

        if (!response || !response.data) {
          throw new Error("No data received from API");
        }

        setCard(response.data);
      } catch (error) {
        console.error("Error fetching card:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, [cardId]);

  console.log("card data in cardShowPage:", card);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!card) return <div>No card found</div>;

  return (
    <>
      <div className="bg-slate-900 h-screen opacity-80">
        <Navbar />

        <div className="mt-10 flex flex-col md:flex-row justify-center items-center px-4">
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <img
              src={card.data.images.small}
              className="hidden md:block rounded-md object-contain w-72 mx-auto"
              alt={card.data.name}
            />
          </div>

          <div className="flex flex-col md:ml-10 w-full max-w-[500px] bg-slate-800 px-4 py-2 border border-slate-700 rounded-xl">
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-playfair text-indigo-400">
                {card.data.name}
              </div>
              <div className="font-playfair text-gray-400">
                {card.data.artist}
              </div>
            </div>

            <div className="flex flex-col mt-6 md:mt-10 w-full">
              <div className="font-lato font-bold text-indigo-300">
                {card.data.attacks[0]?.name}
              </div>
              <div className="font-lato text-gray-400">{card.data.attacks[0]?.text}</div>
              <div className="mt-8 font-lato font-bold">
                {card.data.attacks[1]?.name}
              </div>
              <div className="font-lato">{card.data.attacks[1]?.text}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardShowPage;
