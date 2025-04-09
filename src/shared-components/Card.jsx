import { useState, useEffect } from "react";

const Card = (props) => {
  const { product } = props;
  const [qty, setQty] = useState(0);

  console.log("product getting passed correctly", product )


  const getPrice = (product) => {
    return (
      product?.tcgplayer?.prices?.['1stEditionHolofoil']?.market ??
      product?.tcgplayer?.prices?.['unlimitedHolofoil']?.market ??
      product?.tcgplayer?.prices?.holofoil?.market ??
      product?.tcgplayer?.prices?.reverseHolofoil?.market
    );  
  }
  const price = getPrice(product);

 useEffect(() => {
  getPrice();
 })

  const increaseQty = () => {
    setQty((prev) => prev + 1);
  };
  console.log('value of get price', getPrice)

  return (
    <>
      <div className="p-4 ">
        <div className=" flex flex-col border border-slate-200 w-72 h-96 rounded-lg shadow-lg">
          <div>
            <img
              src={product.images.small}
              className=" mt-3 w-72 h-48 rounded-t-md object-contain"
            />
          </div>
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
