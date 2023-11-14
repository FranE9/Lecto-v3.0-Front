import React, { useContext } from "react";
import { useTranslation } from 'react-i18next';
// components
import Input from "../components/auth/Input";
import Button from "../components/auth/Button";
import Layout from "../components/auth/Layout";
// hooks 
import { useForm } from "../hook/useForm";
import { AuthContext } from "../context/AuthContext";
// assets
import loginBackground from "../../src/assets/images/backgroundLogin.png";
// api
import { register } from "../api/auth";

export const RegisterPage = () => {
  const { updateUserInfo } = useContext(AuthContext);
  const { onInputChange, onResetForm, formState } = useForm({
    username: "",
    password: "",
    name: "",
    email: "",
  });

  const { t } = useTranslation();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { isOk, data, message } = await register(formState);

    if (!isOk) {
      onResetForm();
      alert(message);
      return;
    }
    updateUserInfo(data.access_token);
  };
  return (
    <Layout
      loginBackground={loginBackground}
      title={t('register.title')}
      handleSubmit={handleSubmit}
      footerLabel={t('register.have_account')}
      footerLinkLabel={t('register.login')}
      footerHref="/login"
    >
      <Input
        name={"name"}
        value={formState.name}
        onChange={onInputChange}
        label={t('register.name')}
      />
      <Input
        name={"email"}
        value={formState.email}
        onChange={onInputChange}
        label={t('register.email')}
        type="email"
      />
      <Input
        name={"username"}
        value={formState.username}
        onChange={onInputChange}
        label={t('register.user')}
      />
      <Input
        name={"password"}
        value={formState.password}
        onChange={onInputChange}
        label={t('register.password')}
        type="password"
      />
      <Button label={t('register.submit')} />
    </Layout>
  );
};
