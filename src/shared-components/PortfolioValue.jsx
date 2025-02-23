const PortfolioValue = () => {
  return (
    <>
      <div className="relative flex justify-start w-full max-w-4xl  items-center">
        <div className="absolute flex flex-col">
          <span className=" text-white text-2xl font-lato">$50,123.75</span>
          <span className="text-emerald-500 font-lato">
            +$500.75 in the last 30 days
          </span>
          <button className="mt-4 items-center p-2 flex rounded-lg bg-blue-600 justify-center text-white">
            <i className="text-white mr-1  fa-solid fa-plus"></i>
            Add to portfolio
          </button>
        </div>
      </div>
    </>
  );
};

export default PortfolioValue;
