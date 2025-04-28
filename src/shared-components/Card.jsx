import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardShowPage from "../pages/Product-Search-Page/CardShowPage";

const Card = (props) => {
  const { product } = props;
  const [qty, setQty] = useState(0);

  //console.log("product getting passed correctly", product )


  const getPrice = (product) => {
    return (
      product?.tcgplayer?.prices?.['1stEditionHolofoil']?.market ??
      product?.tcgplayer?.prices?.['unlimitedHolofoil']?.market ??
      product?.tcgplayer?.prices?.holofoil?.market ??
      product?.tcgplayer?.prices?.reverseHolofoil?.market ??
      product?.tcgplayer?.prices?.['1stEdition']?.market ??
      product?.tcgplayer?.prices?.['unlimited']?.market ??
      "No price found"
    );
  }
  
  const price = getPrice(product);

 useEffect(() => {
  getPrice();
 })

  const increaseQty = () => {
    setQty((prev) => prev + 1);
  };

  return (
    <>
      <div className="p-4 ">
        <div className="py-2 flex flex-col bg-slate-800 border border-slate-700 w-72 h-96 rounded-xl shadow-lg">
          <Link to={`/cards/${product.id}`} >
          <div>
            <img
              src={product.images.small}
              className=" mt-4 w-72 h-48 rounded-t-md object-contain"
              />
          </div>
 
          </Link>
          <div className="pl-4 mt-2">
            <div className="font-lato text-xl">{product.name}</div>
            <div>{product.set.name}</div>
            <div className="flex">
            <div>{product.rarity}</div>
            <div className="pl-2">#{product.number}</div>
            </div>
          </div>
          <div className="mt-auto pl-4 flex flex-col  font-playfair ">
            <div>${price}</div>
            <div className="flex justify-between mb-1">
              <div>Qty: {qty}</div>
              <button 
              onClick={increaseQty}
              className="pr-4 text-2xl fa-solid fa-circle-plus text-emerald-500"></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
