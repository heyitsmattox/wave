import {useState, useEffect } from "react";

const Card = (props) => {

  const images = [
    "public/images/brilliantStars.png",
    "public/images/firstEditionBox.avif",
    "public/images/celebi.png",
    "public/images/charizard.png",
    "public/images/es_etb.png",
    "public/images/prismatic.png",
    "public/images/skyridgeBoosterbox.png",
  ];
  const { product } = props;
  
  const combinedName = product["console-name"] + " " + product["product-name"];
  const productName = combinedName.split(" ").slice(1).join(" ");
  
  const editedSetName = product["console-name"].split(" ");
  const setName = editedSetName.slice(1).join(" ");
  
  const randomIdx = Math.floor(Math.random() * 6);
  const [randomImg, setRandomImg] = useState("");
  useEffect(() => {
    setRandomImg(images[randomIdx]);
  }, []);

  return (
    <>
      <div className="p-4">
        <div className="flex flex-col border border-slate-500 w-72 h-96 rounded-lg shadow-lg">
          <div>
            <img
              src={randomImg}
              className="w-72 h-56 rounded-t-md object-cover"
            />
          </div>
          <div className="pl-4 mt-8">
            <div className="font-lato text-2xl">{setName}</div>
            <div>{productName}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
