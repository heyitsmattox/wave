import ValueDisplay from "./ValueDisplay";
import { useState } from "react";

const PortFolioHeader = ({ input, label, placeholder }) => {
  // const [value, setValue ] = useState(64754)


  return (
    <>
      <div className="max-md:!w-full justify-center py-6 px-4 bg-slate-800 flex flex-col border border-slate-700 rounded-xl max-w-80 h-36 shadow-lg">
        <div className="flex items-center">
          <div className={`font-lato text-xl text-indigo-400`}>{label}</div>
          <input
            placeholder={placeholder}
            type={input.type}
            className={`ml-1 text-xl px-2 py-1 bg-slate-700 border focus:outline-indgo-400 border-slate-50 rounded-lg w-48 text-gray-400`}
            name={input.name}
            onChange={input.onChange}
          />
        </div>
       
      </div>
    </>
  );
};

export default PortFolioHeader;
