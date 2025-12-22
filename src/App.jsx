import BaseLayout from "./components/baseLayout/BaseLayout";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Signup from "./pages/signUp";
import Home from "./pages/home";
import VerifyEmail from "./pages/verifyEmail";
import Signin from "./components/signIn/signIn";
import ForgotPassword from "./pages/forgotPassword";
import UserProfilePage from "./pages/myProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/"
          element={
            <BaseLayout>
              <Home />
            </BaseLayout>
          }
        />
        <Route
          path="/my-profile"
          element={
            <BaseLayout>
              <UserProfilePage />
            </BaseLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
