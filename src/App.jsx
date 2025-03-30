import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/auth/SigninPage";
import SignUpPage from "./pages/auth/SignUpPage";
import Dashboard from "./pages/Dashboard";
import { PortfolioProvider } from "./contexts/PortfolioContext";
//import ProductSearch from "./pages/Product-Search-Page/ProductSearch";
import SearchResults from "./pages/Product-Search-Page/SearchResults";


function App() {
  return (
    <>
     <PortfolioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage  />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
     </PortfolioProvider>
    </>
  );
}

export default App;
