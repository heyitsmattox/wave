import { useState } from 'react';

const Card = (props) => {
  const [isAdded, setIsAdded] = useState(false);
  const [value, setValue] = useState(0);
  const { product } = props;
  console.log("details of our individual product", product)

  const price = product['loose-price'] / 100;
  const consoleName = product['console-name'];
  const consoleNameParts = consoleName.split(' ');
  const setName = consoleNameParts.slice(1, 3).join(' ');

  const handleAddToPortfolio = () => {
    setIsAdded(true);
    setValue(price);
  }


    return (
        <div className=" bg-white font-lato border border-slate-400 rounded-lg h-96 w-72 p-8 shadow-xl">
          <img src="images/skyridgeBoosterbox.png" className="w-full h-36 object-contain" />
            <div className="mt-4 text-slate-700 text-xl">{setName + " " + product['product-name']}</div>
              <div className="text-slate-400 font-playfair text-sm">{setName}</div>
            <div className="text-slate-400 mt-4 font-playfair">
              <div>Value: ${price}</div>
              <div>Type: {product['product-name']}</div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Add to Portfolio</button>
            </div>
        </div>
    )
};

export default Card;

