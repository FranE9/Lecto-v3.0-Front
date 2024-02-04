import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const NoTicket = ({ text }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onGoBack = () => {
    navigate(`/dashboard`);
  }

  return (
    <>
      <h1 className="text-center my-4">{text}</h1>
      <Button type="button" text={t("results.goBack")} containerClassName="py-6 flex justify-center" onClick={onGoBack} />
    </>
  );
};

export default NoTicket;
