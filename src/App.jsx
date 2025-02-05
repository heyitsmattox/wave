import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/auth/SigninPage";
import SignOutPage from "./pages/auth/SignUpPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignOutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
