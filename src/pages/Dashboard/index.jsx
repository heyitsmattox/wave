import PortFolioHeader from "../../shared-components/PortfolioHeader";
import SearchBar from "../Product-Search-Page/SearchBar";
import { useState } from "react";


const Dashboard = () => {

  const [portfolioName, setPortfolioName ] = useState("")
  const [amountOfPortfolio, setAmountOfPortfolio  ] = useState("")


  return (
    <>
      <div className="pt-10 pl-10 bg-slate-100 opacity-80 w-full h-screen">
        <SearchBar />
        <PortFolioHeader
        textColor={"slate-500"}
        size="md"
        font= "lato"
        placeholder="name of portfolio"
        label="Portfolio:"
        input={{
          type: "text",
          size: "lg",
          name: portfolioName,
          onChange: (e) => setPortfolioName(e.target.value)
        }}
        />
      </div>
    </>
  );
};

export default Dashboard;
