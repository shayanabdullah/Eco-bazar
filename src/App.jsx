import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MainLayouts from "./components/layouts/MainLayouts";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
