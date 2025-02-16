import { useState } from "react";

const Dashboard = () => {
  const [ portfolioName, setPortfolioName ] = useState("")
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
        <button
        type="submit"
        className="ml-2 bg-blue-500 text-white px-3 py-1 rounded-lg"
        >Save</button>
      </form>
      {
        console.log('portfolio name is:', portfolioName)
      }

    </div>
      <h2 className="flex text-3xl">{portfolioName}</h2>
  </>
)
};

export default Dashboard