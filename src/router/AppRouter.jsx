import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "../components/home/Navbar";
import { DashboardPage, TextPage, ResultsPage, TicketsPage } from "../pages";

export const AppRouter = ({ initialRoute = "/dashboard" }) => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard2" element={<TextPage />} />
        <Route path="/results/:ticketId" element={<ResultsPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="*" element={<Navigate to={initialRoute} />} />
      </Route>
    </Routes>
  );
};
