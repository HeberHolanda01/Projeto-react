import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Progress from "./components/Progress";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

