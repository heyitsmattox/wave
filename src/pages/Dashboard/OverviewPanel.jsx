import { useState, useEffect } from "react";

const OverviewPanel = () => {
    const [ portfolioName, setPortfolioName ] = useState(() => {
      const storedData = localStorage.getItem("portfolioName");
      console.log("stored data value -->", storedData)
      return storedData ? JSON.parse(storedData) : null;
    });

  useEffect(() => {
    localStorage.setItem("portfolioName", JSON.stringify(portfolioName))
  }, [portfolioName])

return (
  <>
    <div className="pl-4 pt-4 flex justify-start w-full max-w-4xl  items-center">
      <div className="font-latot text-lg text-slate-400 mr-1" >Portfolio:</div>
     
      <form
      onSubmit={(e) => {
        e.preventDefault();
       setPortfolioName(portfolioName)
      }}
      >
        <input 
        type="text"
        value={portfolioName}
        onChange={(e) => {
          setPortfolioName(e.target.value)
          
        }
      }
        className=" font-lato text-lg text-emerald-500 bg-slate-700"
        ></input>
      </form>
    </div>
    <div className="ml-4 flex justify-start w-full max-w-4xl  items-center">
      <div className="flex flex-col">
    <span className="text-white text-2xl font-lato">$50,123.75</span>
    <span className="text-emerald-500 font-lato">+$500.75 in the last 30 days</span>
    <button className="p-2 flex rounded-lg bg-blue-600 justify-center text-white">Add to portfolio</button>
      </div>

    </div>
      {/* <h2 className="flex text-3xl">{portfolioName}</h2> */}
  </>
)
};

export default OverviewPanel