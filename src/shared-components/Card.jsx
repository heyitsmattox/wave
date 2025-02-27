

const Card = (props) => {
  const { product } = props;
    return (
        <div>
            <h1>{product['console-name']}</h1>
        </div>
    )
};

export default Card;



// {products.map((product) => (
//   <li key={product.id} className="text-white border-b p-2">
//     {product['console-name'] + " " +product['product-name']} - ${product['loose-price'] / 100} {/* Price in dollars */}
//   </li>
// ))}