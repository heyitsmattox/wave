import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardShowPage from "../pages/Product-Search-Page/CardShowPage";

const Card = (props) => {
  const { product, portfolioValue,  setPortfolioValue } = props;
  const [qty, setQty] = useState(0);

  console.log("product getting passed correctly", product )

  const getPrice = (product) => {
    return (
      product?.tcgplayer?.prices?.["1stEditionHolofoil"]?.market ??
      product?.tcgplayer?.prices?.["unlimitedHolofoil"]?.market ??
      product?.tcgplayer?.prices?.holofoil?.market ??
      product?.tcgplayer?.prices?.reverseHolofoil?.market ??
      product?.tcgplayer?.prices?.["1stEdition"]?.market ??
      product?.tcgplayer?.prices?.["unlimited"]?.market ??
      "No price found"
    );
  };

  const price = getPrice(product);

  useEffect(() => {
    getPrice();
  });


  const increaseQty = () => {
    setQty((prev) => prev + 1);
    if (product.id) {
      setPortfolioValue(
        (prev) =>
          prev + product.tcgplayer.prices.holofoil.market ||
          prev + product.cardmarket.prices.averageSellPrice || console.log("no price available")
      );

    }
  };


  return (
    <>
      <div className="gap-6 p-6">
        <div className="py-2 flex flex-col bg-slate-800 border  border-slate-700 w-72 h-96 rounded-2xl shadow-lg">
          <Link to={`/cards/${product.id}`}>
            {/* Product image section */}
            <div>
              <img
                src={product.images.small}
                className=" mt-4 w-72 h-48 rounded-t-md object-contain"
              />
            </div>
          </Link>
          <div className="pl-4 mt-2">
            {/* Product name, rarity and set name section */}
            <div className="font-semibold text-gray-100 font-lato text-xl">
              {product.name}
            </div>
            <div className="text-gray-400 text-sm">{product.set.name}</div>
            <div className="flex text-gray-400 text-sm">
              <div>{product.rarity}</div>
              <div className="pl-2">#{product.number}</div>
            </div>
          </div>
          {/* Price, qty and button section */}
          <div className="mt-auto pl-4 flex flex-col  font-playfair text-gray-300 text-sm font-medium">
            <div>${price}</div>
            <div className="flex justify-between mb-1">
              <div>Qty: {qty}</div>
              <button
                onClick={increaseQty}
                className="pr-4 text-2xl fa-solid fa-circle-plus text-emerald-500"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
