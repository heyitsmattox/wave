import { useState } from "react";

const Card = (props) => {
  const { product } = props;

  console.log("product from the Card component", product)

  const combinedName = product['console-name'] + ' ' + product['product-name'];
  const productName = combinedName.split(' ').slice(1).join(' ');
  // console.log(productName)

  const editedSetName = product['console-name'].split(' ');
 const setName = editedSetName.slice(1).join(' ');

  return (
    <>
    <div className="p-10 flex flex-wrap w-full max-w-6xl items-center h-screen">
    
    <div className="flex flex-col border border-slate-500 w-72 h-96 rounded-lg shadow-lg">
      <div>
        <img 
        src="public/images/brilliantStars.png"
        className="w-72 h-56 rounded-t-md object-cover" />
      </div>
      <div className="pl-4 mt-8">
      <div className="font-lato text-2xl">{productName}</div>
      <div>{setName}</div>
      <div>{}</div>


      </div>
    </div>


    </div>
    </>
  )

};

export default Card;