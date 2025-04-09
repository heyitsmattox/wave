import PortFolioHeader from "../../shared-components/PortfolioHeader";
// import SearchBar from "../Product-Search-Page/SearchBar";
import { useState } from "react";
import SearchBarV2 from "../Product-Search-Page/SearchBarV2";


const Dashboard = () => {

  const [portfolioName, setPortfolioName ] = useState("")
  // const [amountOfPortfolio, setAmountOfPortfolio  ] = useState("")


  return (
    <>
      <div className="max-sm:!items-center flex flex-col pt-10 pl-10 bg-slate-100 opacity-80 w-full h-screen">
        {/* <SearchBar /> */}
        <SearchBarV2 />
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

// this is a test on how well i like this keyboard or not
//  this is a test on how well i like this keyboar or not
// this is a test on how well i like this keyboard or not