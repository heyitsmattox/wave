import { createContext, useState, useContext } from 'react';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolioValue, setPortfolioValue] = useState(0);

  return (
    <PortfolioContext.Provider value={{ portfolioValue, setPortfolioValue }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
