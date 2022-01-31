import React from "react";
import "./App.css";
import DashBoardFinance from "./Pages/DashBoardFinance/DashBoardFinance";
import DashBoardEmployees from "./Pages/DashBoardEmployees/DashBoardEmployees";
import Sidebar from "./Components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
    <Routes>
      
      <Route path="/" element={<DashBoardFinance />} />
      <Route path="DashBoardEmployees" element={<DashBoardEmployees />} />
    </Routes>
    </div>
  );
}
