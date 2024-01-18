import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hello from "../components/Hello";
import Recipes from "../components/Recipe";


export default (
  <Router>
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  </Router>
);
