import { useState, useEffect } from "react";

const Card = (props) => {
  const { product } = props;
  const [qty, setQty] = useState(0);

  const images = [
    "public/images/brilliantStars.png",
    "public/images/firstEditionBox.avif",
    "public/images/celebi.png",
    "public/images/charizard.png",
    "public/images/es_etb.png",
    "public/images/prismatic.png",
    "public/images/skyridgeBoosterbox.png",
  ];

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const dollarFormatter = formatter.format(product["loose-price"] / 100);
  const combinedName = product["console-name"] + " " + product["product-name"];
  const productName = combinedName.split(" ").slice(1).join(" ");

  const editedSetName = product["console-name"].split(" ");
  const setName = editedSetName.slice(1).join(" ");

  const randomIdx = Math.floor(Math.random() * 6);
  const [randomImg, setRandomImg] = useState("");

  useEffect(() => {
    setRandomImg(images[randomIdx]);
  }, []);

  const increaseQty = () => {
    setQty((prev) => prev + 1);
  };

  return (
    <>
      <div className="p-4">
        <div className="flex flex-col border border-slate-200 w-72 h-96 rounded-lg shadow-lg">
          <div>
            <img
              src={randomImg}
              className="w-72 h-56 rounded-t-md object-cover"
            />
          </div>
          <div className="pl-4 mt-2">
            <div className="font-lato text-xl">{productName}</div>
            <div>{setName}</div>
          </div>
          <div className="mt-auto pl-4 flex flex-col  font-playfair ">
            <div>{dollarFormatter}</div>
            <div className="flex justify-between mb-1">
              <div>Qty: {qty}</div>
              <button 
              onClick={increaseQty}
              className="pr-4 text-2xl fa-solid fa-circle-plus text-emerald-500"></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
