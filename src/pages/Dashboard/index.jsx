import PortFolioHeader from "../../shared-components/PortfolioHeader";
import SearchBar from "../Product-Search-Page/SearchBar";
import { useState } from "react";
// import ValueDisplay from "../../shared-components/ValueDisplay";


const Dashboard = () => {

  const [portfolioName, setPortfolioName ] = useState("")
  const [amountOfPortfolio, setAmountOfPortfolio  ] = useState("")


  return (
    <>
      <div className="pt-10 pl-10 bg-slate-100 opacity-80 w-full h-screen">
        <SearchBar />
        <PortFolioHeader
        placeholder="name of portfolio"
        label="Portfolio:"
        input={{
          type: "text",
          name: portfolioName,
          onChange: (e) => setPortfolioName(e.target.value)
        }}
        />
      </div>
    </>
  );
};

export default Dashboard;
