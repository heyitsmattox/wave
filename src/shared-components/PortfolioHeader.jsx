import ValueDisplay from "./ValueDisplay";
import { useState } from "react";

const PortFolioHeader = ({ input, label, placeholder, font, size, textColor }) => {
  const [value, setValue ] = useState(64754)


  return (
    <>
      <div className="bg-slate-200 flex flex-col border border-slate-500 rounded-lg w-96 h-36 p-2 shadow-lg">
        <div className="flex items-center">
          <div className={`font-${font} text-${size} text-${textColor}`}>{label}</div>
          <input
            placeholder={placeholder}
            type={input.type}
            className={`ml-1 text-${input.size} px-2 py-1 bg-slate-50 border border-slate-100 rounded-lg focus:outline-blue-100 w-64 text-emerald-400`}
            name={input.name}
            onChange={input.onChange}
          />
        </div>
        <ValueDisplay 
        font="lato"
        size="3xl"
        color="slate-500"
        value={value}
        />
      </div>
    </>
  );
};

export default PortFolioHeader;
