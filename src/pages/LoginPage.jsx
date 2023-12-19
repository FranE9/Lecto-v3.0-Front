import React, { useContext } from "react";
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2'
// components
import Input from "../components/auth/Input";
import Button from "../components/auth/Button";
import Layout from "../components/auth/Layout";
// hooks
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../hook/useForm";
// assets
import loginBackground from "../../src/assets/images/backgroundLogin.png";
// api
import { login } from "../api/auth";
import { validateLogin } from "../utils/validation";

export const LoginPage = () => {
  const { updateUserInfo } = useContext(AuthContext);
  const { onInputChange, onResetForm, formState } = useForm({
    username: "",
    password: "",
  });

  const { t } = useTranslation();

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (!validateLogin(formState)) {
      return Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: t('login.error'),
      })
    }

    const formData = new FormData();
    formData.append("username", formState.username);
    formData.append("password", formState.password);

    const { isOk, data, message } = await login(formData);
    if (!isOk) {
      onResetForm();
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
      });
    }
    updateUserInfo(data.access_token);
  };

  return (
    <Layout
      loginBackground={loginBackground}
      title={t('login.title')}
      handleSubmit={handleSubmit}
      footerLabel={t('login.no_account')}
      footerLinkLabel={t('login.register')}
      footerHref="/register"
    >
      <Input
        name={"username"}
        value={formState.username}
        onChange={onInputChange}
        label={t('login.user')}
      />
      <Input
        name={"password"}
        value={formState.password}
        onChange={onInputChange}
        label={t('login.password')}
        type="password"
      />
      <a href="#" className="text-xs text-purple-600 hover:underline">
        {t('login.forgot_password')}
      </a>
      <Button label={t('login.submit')} />
    </Layout>
  );
};
