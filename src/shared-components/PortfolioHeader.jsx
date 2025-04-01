import ValueDisplay from "./ValueDisplay";
import { useState } from "react";

const PortFolioHeader = ({ input, label, placeholder }) => {
  const [value, setValue ] = useState(11)
  // state we want to keep track of
  // portfolioName
  // valueOfPortfolio
  // amountValueIncrease

  return (
    <>
      <div className="bg-slate-200 flex flex-col border border-slate-500 rounded-lg w-96 h-36 p-2 shadow-lg">
        <div className="flex text-2xl items-center">
          <div>{label}</div>
          <input
            placeholder={placeholder}
            type={input.type}
            className="px-1 py-1 bg-slate-50 border border-slate-100 rounded-lg focus:outline-blue-100 w-64 text-emerald-400"
            name={input.name}
            onChange={input.onChange}
          />
        </div>
        <ValueDisplay 
        label="Value of portfolio"
        value={value}
        />
      </div>
    </>
  );
};

export default PortFolioHeader;
