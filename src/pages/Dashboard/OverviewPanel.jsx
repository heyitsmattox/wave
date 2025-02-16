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
    <div className="flex justify-center w-full m-4 max-w-4xl  items-center">
      <div className="font-latot text-lg text-slate-600 mr-1" >Portfolio:</div>
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
        className=" font-lato text-lg text-emerald-500"
        ></input>
      </form>

    </div>
      <h2 className="flex text-3xl">{portfolioName}</h2>
  </>
)
};

export default OverviewPanel