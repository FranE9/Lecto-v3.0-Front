import React from "react";
import Spinner from "../commons/Spinner";
import { DEFAULT_STYLE_BTN } from "../../utils/constants";

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
        className={`${DEFAULT_STYLE_BTN} ${customClassName}`}
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
