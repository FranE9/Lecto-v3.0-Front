import React, { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext();

const initialState = {
  isLogged: false,
  token: "",
  username: '',
  userId: '',
  lang: (navigator.language || navigator.userLanguage || "").split("-")[0]
};

export const AuthProvider = ({ children }) => {
  const storedState = JSON.parse(localStorage.getItem("lecto-user"));
  const i18Lang = localStorage.getItem('i18nextLng');

  const [user, setUser] = useState(storedState || {...initialState, lang: i18Lang });

  const changeLanguage = (lang) => {
    const newUserInfo = { ...user, lang };
    localStorage.setItem("lecto-user", JSON.stringify(newUserInfo));
    setUser(newUserInfo);
  }

  const updateUserInfo = (token) => {
    if (!token) {
      setUser({ ...initialState, lang: user.lang });
      return;
    }

    const decoded = jwt_decode(token);

    const newUserInfo = {
      isLogged: Boolean(token),
      token,
      username: decoded?.username || "",
      userId: decoded?.user_id || "",
      lang: user.lang,
    };
    localStorage.setItem("lecto-user", JSON.stringify(newUserInfo));
    setUser(newUserInfo);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        updateUserInfo,
        changeLanguage
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
