import ValueDisplay from "./ValueDisplay";
import { useState } from "react";

const PortFolioHeader = ({ input, label, placeholder, font, size, textColor }) => {
  const [value, setValue ] = useState(64754)


  return (
    <>
      <div className="max-md:!w-full bg-slate-200 flex flex-col border border-slate-300 rounded-lg max-w-80 h-36 p-2 shadow-lg">
        <div className="flex items-center">
          <div className={`font-lato text-xl text-indigo-400`}>{label}</div>
          <input
            placeholder={placeholder}
            type={input.type}
            className={`ml-1 text-xl px-2 py-1 bg-slate-50 border focus:outline-indgo-400 border-slate-100 rounded-lg w-48 text-black`}
            name={input.name}
            onChange={input.onChange}
          />
        </div>
        <ValueDisplay 
        font="lato"
        size="xl"
        color="slate-500"
        value={value}
        />
      </div>
    </>
  );
};

export default PortFolioHeader;
