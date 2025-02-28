const Card = (props) => {
  const { product } = props;
  console.log("details of our individual product", product)

  const price = product['loose-price'] / 100;

    return (
        <div className="text-blue-500 border border-slate rounded-lg h-56 w-56">
            <h1 className="text-2xl">{product['console-name']}</h1>
            <div className="text-white">
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