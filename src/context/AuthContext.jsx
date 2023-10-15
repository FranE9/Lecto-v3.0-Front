import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const initialState = {
  isLogged: false,
  token: "",
};

export const AuthProvider = ({ children }) => {
  const storedState = JSON.parse(localStorage.getItem("lecto-user"));

  const [user, setUser] = useState(storedState || initialState);

  const updateUserInfo = (token) => {
    if (!token) {
      localStorage.removeItem("lecto-user");
      setUser(initialState);
      return;
    }

    const newUserInfo = {
      isLogged: Boolean(token),
      token,
    };
    localStorage.setItem("lecto-user", JSON.stringify(newUserInfo));
    setUser(newUserInfo);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        updateUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
