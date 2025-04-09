import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/auth/SigninPage";
import SignUpPage from "./pages/auth/SignUpPage";
import Dashboard from "./pages/Dashboard";
// import SearchResults from "./pages/Product-Search-Page/SearchResults";
import SearchResultsV2 from "./pages/Product-Search-Page/SearchResultsV2";


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage  />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cards" element={<SearchResultsV2 />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
