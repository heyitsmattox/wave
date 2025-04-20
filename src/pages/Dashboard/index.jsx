import PortFolioHeader from "../../shared-components/PortfolioHeader";
import { useState } from "react";
import SearchBarV2 from "../Product-Search-Page/SearchBarV2";
import Navbar from "../../shared-components/Navbar";


const Dashboard = () => {

  const [portfolioName, setPortfolioName ] = useState("")


  return (
    <>
      <div className="max-sm:!items-center flex flex-col pl-10 pr-10 bg-slate-100 opacity-80 w-full h-screen">
        {/* <SearchBar /> */}
        <Navbar />
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