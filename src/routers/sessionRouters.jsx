import React from "react";
import { Routes, Route } from "react-router-dom";

import { Step1 } from "../pages/step1";

const Routers = () => {
  return (
    <Routes>
      <Route path="/step1" element={<Step1 />}></Route>
      <Route index element={<Step1 />} />
    </Routes>
  );
};

export default Routers;
