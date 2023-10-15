import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "../pages";

const PublicRouter = ({ initialRoute = "/" }) => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to={initialRoute} />} />
    </Routes>
  );
};

export default PublicRouter;
