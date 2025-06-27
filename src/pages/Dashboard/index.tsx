import PortFolioHeader from "../../shared-components/PortfolioHeader";
import { useState } from "react";
import SearchBar from "../Product-Search-Page/SearchBar";
import Navbar from "../Navbar/index";
import Chart from "../Charts";


const Dashboard = () => {

  const [portfolioName, setPortfolioName ] = useState("")


  return (
    <>
      <div className="max-sm:!items-center flex flex-col pl-10 pr-10 bg-slate-900 opacity-80 w-full h-screen">
        {/* <SearchBar /> */}
        <Navbar />
        <SearchBar />
        <div className="flex justify-between">
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
        <Chart />

        </div>
      </div>
    </>
  );
};

export default Dashboard;