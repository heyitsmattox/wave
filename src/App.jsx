import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/auth/SigninPage";
import SignUpPage from "./pages/auth/SignUpPage";
import Dashboard from "./pages/Dashboard";
import { PortfolioProvider } from "./contexts/PortfolioContext";

function App() {
  return (
    <>
     <PortfolioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage  />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pokemon/:id" element={<PokemonShowPage />} />
        </Routes>
      </BrowserRouter>
     </PortfolioProvider>
    </>
  );
}

export default App;
