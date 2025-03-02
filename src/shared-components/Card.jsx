import { useEffect } from "react";
import AddToValueBtn from "./AddToValueBtn";
import { usePortfolio } from "../contexts/PortfolioContext";

const Card = (props) => {
  const { product, quantity, onQuantityChange } = props;
  const { setPortfolioValue } = usePortfolio();

  console.log("details of our individual product", product);

  const price = product["loose-price"] / 100;
  const consoleName = product["console-name"];
  const consoleNameParts = consoleName.split(" ");
  const setName = consoleNameParts.slice(1, 3).join(" ");

  const handleQtyAndValueInPortfolio = () => {
    setPortfolioValue((prevValue) => prevValue + price);
    onQuantityChange(quantity + 1);
    console.log("button handleQtyAndValueInPortfolio was clicked");
  };

  useEffect(() => {
    console.log("qty", quantity);
  }, [quantity]);

  return (
    <>
      <div className=" bg-white font-lato border border-slate-400 rounded-lg h-96 w-72 p-8 shadow-xl">
        <img
          src="images/skyridgeBoosterbox.png"
          className="w-full h-36 object-contain"
        />
        <div className="mt-4 text-slate-700 text-xl">
          {setName + " " + product["product-name"]}
        </div>
        <div className="text-slate-400 font-playfair text-sm">{setName}</div>
        <div className="mt-2 w-full border-b border-slate-300 w=[1px]"></div>
        <div className=" flex flex-col justify-end text-slate-400 mt-10 font-playfair">
          <div className="flex justify-between items-end">
            <div className="mb-1">
              <div className="text-slate-800">${price}</div>
              <div>Qty: {quantity}</div>
            </div>
            <AddToValueBtn handleClick={handleQtyAndValueInPortfolio} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
