
import AddToValueBtn from "./AddToValueBtn";
import { usePortfolio } from "../contexts/PortfolioContext";
import { Link } from "react-router-dom";
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


  return (
    <>
   
      <div className=" bg-white font-lato border border-slate-400 rounded-lg h-96 w-72 p-8 shadow-xl">
        <Link 
        to={`/dashboard/${product.id}`}
        product={product}
        > 
        <img
          src="images/brilliantStars.png"
          alt="brilliant stars"
          className="w-full h-36 object-contain"
          />
        <div className="mt-4 text-slate-700 text-xl">
          {setName + " " + product["product-name"]}
        </div>
        <div className="text-slate-400 font-playfair text-sm">{setName}</div>
          </Link>
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
