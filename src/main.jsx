import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import i18n (needs to be bundled ;)) 
import './utils/i18n';
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
