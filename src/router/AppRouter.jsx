import React, { useState } from "react";
import { Route, Routes, Router } from "react-router-dom";
import { Navbar } from "../Navbar";
import { HomePage, DashboardPage, LoginPage, RegisterPage } from "../pages";
import { PrivateRoute } from "./PrivateRoute";

const AuthApi = React.createContext();
const TokenApi = React.createContext();
import Cookies from "js-cookie";

export const AppRouter = () => {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState("");
  const readCookie = () => {
    let token = Cookies.get("token");
    if (token) {
      setAuth(true);
      setToken(token);
    }
  };
  React.useEffect(() => {
    readCookie();
  }, []);
  return (
    <>
      <AuthApi.Provider value={{ auth, setAuth }}>
        <TokenApi.Provider value={{ token, setToken }}>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<HomePage />} />
              {!auth ? <Route path="login" element={<LoginPage />} /> : <></>}
              {!auth ? (
                <Route path="register" element={<RegisterPage />} />
              ) : (
                <></>
              )}
              <Route
                path="dashboard"
                element={
                  <PrivateRoute>
                    <DashboardPage />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </TokenApi.Provider>
      </AuthApi.Provider>
    </>
  );
};
