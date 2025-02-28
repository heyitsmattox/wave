const Card = (props) => {
  const { product } = props;
  console.log("details of our individual product", product)

  const price = product['loose-price'] / 100;

  const consoleName = product['console-name'];
  const consoleNameParts = consoleName.split(' ');
  const setName = consoleNameParts.slice(1, 3).join(' ');

  // console.log("string value", product['console-name'])
  // const string = product['console-name'].split(' ');
  // console.log("new string value", string);
  // const SetName = string.splice(1, 2);
  // const stringNameOfSet = SetName.join(' ');
  // console.log("Set name is", stringNameOfSet);

    return (
        <div className=" font-latoborder border-slate-600 rounded-lg h-64 w-56 p-2 shadow-lg">
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



// {products.map((product) => (
//   <li key={product.id} className="text-white border-b p-2">
//     {product['console-name'] + " " +product['product-name']} - ${product['loose-price'] / 100} {/* Price in dollars */}
//   </li>
// ))}