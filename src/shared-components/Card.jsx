import { useState } from 'react';
import AddToValueBtn from './AddToValueBtn';
import { usePortfolio } from '../contexts/PortfolioContext';

const Card = (props) => {
  const [isAdded, setIsAdded] = useState(false);
  const { product } = props;
const { setPortfolioValue } = usePortfolio(); 

  console.log("details of our individual product", product)

  const price = product['loose-price'] / 100;
  const consoleName = product['console-name'];
  const consoleNameParts = consoleName.split(' ');
  const setName = consoleNameParts.slice(1, 3).join(' ');

  const handleAddToPortfolio = () => {
    setIsAdded(true);
    setPortfolioValue(prevValue => prevValue + price);
    console.log("value", value);
    console.log("button handleAddToPortfolio was clicked");
  }


    return (
      <>
        <div className=" bg-white font-lato border border-slate-400 rounded-lg h-96 w-72 p-8 shadow-xl">
          <img src="images/skyridgeBoosterbox.png" className="w-full h-36 object-contain" />
            <div className="mt-4 text-slate-700 text-xl">{setName + " " + product['product-name']}</div>
              <div className="text-slate-400 font-playfair text-sm">{setName}</div>
            <div className="text-slate-400 mt-4 font-playfair">
              <div className="text-slate-800">${price}</div>
              {/* <div>{product['product-name']}</div> */}
              <div>Qty: 1</div>
              <div>
                <AddToValueBtn isAdded={isAdded} handleClick={handleAddToPortfolio} />
                </div>
            </div>
        </div>
      </>
    )
};

export default Card;

