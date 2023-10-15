import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "../components/home/Navbar";
import { DashboardPage } from "../pages";

export const AppRouter = ({ initialRoute = "/dashboard" }) => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to={initialRoute} />} />
      </Route>
    </Routes>
  );
};
