import { useState } from 'react';
import AddToValueBtn from './AddToValueBtn';
import { usePortfolio } from '../contexts/PortfolioContext';

const PortfolioValue = () => {
  const { portfolioValue } = usePortfolio();


  return (
    <>
      <div className="relative flex justify-start w-full max-w-4xl  items-center">
        <div className="absolute flex flex-col">
          <span className=" text-white text-2xl font-lato">${portfolioValue}</span>
          <span className="text-emerald-500 font-lato">
            +$500.75 in the last 30 days
          </span>
          {/* <AddToValueBtn/> */}
        </div>
      </div>
    </>
  );
};

export default PortfolioValue;
