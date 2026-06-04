import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MainLayouts from "./components/layouts/MainLayouts";
import PageNotFound from "./pages/PageNotFound";
import VerifyEmail from "./pages/VerifyEmail";
import FAQS from './pages/FAQS';
import AllCatagories from "./pages/AllCatagories";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/account/register" element={<Register />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/help/faq" element={<FAQS />} />
          <Route path="/all-catagories" element={<AllCatagories />} />
         
          <Route
            path="/verifyemail/success"
            element={<VerifyEmail status="success" />}
          />
          <Route
            path="/verifyemail/failed"
            element={<VerifyEmail status="failed" />}
          />
          <Route
            path="/verifyemail/already-verified"
            element={<VerifyEmail status="already-verified" />}
          />
           <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
