import { useState, useEffect } from "react";
import SearchBar from "../../shared-components/SearchBar";

const OverviewPanel = () => {

const handleSearch = (searchTerm) => {
  console.log('Searching for:', searchTerm);
}

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
    <div className="pl-4 pt-4 flex justify-start w-full max-w-md mb-2">
    <div className="flex items-center font-latot text-lg text-slate-400 mr-1" >Portfolio:</div>
     
      <form
      onSubmit={(e) => {
        e.preventDefault();
        setPortfolioName(portfolioName)
      }}
      >
        <input 
        type="text"
        className="font-lato text-lg text-emerald-500 bg-slate-700 border border-slate-500 focus:border-slate-500 rounded-md"
        value={portfolioName}
        onChange={(e) => {
          setPortfolioName(e.target.value)
        }
      }
        ></input>
      </form>
    </div>

    <div className=" flex justify-center">
      <SearchBar onSearch={handleSearch} />

    </div>
    <div className="ml-4 flex justify-start w-full max-w-4xl  items-center">
      <div className="absolute flex flex-col">
    <span className=" text-white text-2xl font-lato">$50,123.75</span>
    <span className="text-emerald-500 font-lato">+$500.75 in the last 30 days</span>
    <button className="items-center p-2 flex rounded-lg bg-blue-600 justify-center text-white">
    <i className="text-white mr-1 fa-solid fa-plus"></i>
      Add to portfolio</button>
      </div>

    </div>
    
  </>
)
};

export default OverviewPanel