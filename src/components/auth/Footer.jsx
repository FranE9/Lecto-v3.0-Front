import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ label, linkLabel, href }) => {
  return (
    <p className="mt-8 text-xs font-light text-center text-gray-700">
      {" "}
      {label}{" "}
      <Link to={href} className="font-medium text-purple-600 hover:underline">
        {linkLabel}
      </Link>
    </p>
  );
};

export default Footer;
