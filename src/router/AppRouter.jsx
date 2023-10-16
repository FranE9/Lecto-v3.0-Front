import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "../components/home/Navbar";
import { DashboardPage, DashboardPage2 } from "../pages";

export const AppRouter = ({ initialRoute = "/dashboard" }) => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard2" element={<DashboardPage2 />} />
        <Route path="*" element={<Navigate to={initialRoute} />} />
      </Route>
    </Routes>
  );
};
