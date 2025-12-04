import BaseLayout from "./components/baseLayout/BaseLayout";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Signup from "./pages/signUp";
import Signin from "./pages/signIn/signIn";
import Home from "./pages/home";
import VerifyEmail from "./pages/verifyEmail/VerifyEmail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route
          path="/"
          element={
            <BaseLayout>
              <Home />
            </BaseLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
