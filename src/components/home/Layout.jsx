import React from "react";

const Layout = ({ shadow = true, children }) => {
  return (
    <div
      className={`container mx-auto px-12 rounded-lg ${
        shadow ? "shadow-xl" : ""
      } py-6`}
    >
      {children}
    </div>
  );
};

export default Layout;
