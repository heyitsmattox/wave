const Card = (props) => {
  const { product } = props;
  console.log("details of our individual product", product)

  const price = product['loose-price'] / 100;

  const consoleName = product['console-name'];
  const consoleNameParts = consoleName.split(' ');
  const setName = consoleNameParts.slice(1, 3).join(' ');


    return (
        <div className=" font-lato border border-blue-400 rounded-lg h-96 w-64 p-8 shadow-lg">
          <img src="images/skyridgeBoosterbox.png" className="w-full h-24 object-cover" />
            <div className="text-white text-xl">{product['console-name']}</div>
              <div className="text-slate-400 font-playfair text-sm">{setName}</div>
            <div className="text-white mt-4 font-playfair">
              <div>Value: ${price}</div>
              <div>Type: {product['product-name']}</div>
            </div>
        </div>
    )
};

export default Card;

