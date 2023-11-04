import React from "react";
import Spinner from "../commons/Spinner";

const Button = ({
  type = "submit",
  text,
  onClick = () => {},
  loading = false,
  customClassName = "",
  containerClassName = "py-6"
}) => {
  return (
    <div className={containerClassName}>
      <button
        type={type}
        disabled={loading}
        className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center ${customClassName}`}
        {...(type == "submit" ? {} : { onClick })}
      >
        {loading ? (
          <Spinner text="Cargando..." />
        ) : (
          text
        )}
      </button>
    </div>
  );
};

export default Button;
