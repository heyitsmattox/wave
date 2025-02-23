import { useState, useEffect } from "react";

const PortfolioNameInput = () => {
  const [portfolioName, setPortfolioName] = useState("");

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("portfolioName");
      if (storedData && storedData !== "null") {
        setPortfolioName(JSON.parse(storedData));
      }
    } catch (error) {
      console.error("Error loading portfolio name:", error);
    }
  }, []);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setPortfolioName(newValue);
    try {
      localStorage.setItem("portfolioName", JSON.stringify(newValue));
    } catch (error) {
      console.error("Error saving portfolio name:", error);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md mb-2">
      <div className="flex items-center font-lato text-lg text-slate-400 mb-2">
        Portfolio:
      </div>
      <input
        type="text"
        className="font-lato text-lg text-emerald-500 bg-slate-700 border border-slate-500 focus:border-slate-500 rounded-md"
        value={portfolioName}
        onChange={handleChange}
      />
    </div>
  );
};

export default PortfolioNameInput;

