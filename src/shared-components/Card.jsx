const Card = (props) => {
  const { product } = props;
  console.log("details of our individual product", product)

  const price = product['loose-price'] / 100;

  const consoleName = product['console-name'];
  const consoleNameParts = consoleName.split(' ');
  const setName = consoleNameParts.slice(1, 3).join(' ');


    return (
        <div className=" font-lato border border-blue-400 rounded-lg h-64 w-56 p-2 shadow-lg">
            <div className="text-white text-xl">{product['console-name']}</div>
              <div className="text-slate-400 font-playfair text-sm">{setName}</div>
            <div className="font-playfair">
              <div>${price}</div>
              <div>{product['product-name']}</div>
            </div>
        </div>
    )
};

export default Card;

