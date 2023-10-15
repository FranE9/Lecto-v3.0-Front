import React, { useContext } from "react";
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

export const LoginPage = () => {
  const { updateUserInfo } = useContext(AuthContext);
  const { onInputChange, onResetForm, formState } = useForm({
    username: "",
    password: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("username", formState.username);
    formData.append("password", formState.password);

    const { isOk, data, message } = await login(formData);
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
      title="Iniciar sesión"
      handleSubmit={handleSubmit}
      footerLabel="¿No tienes una cuenta?"
      footerLinkLabel="Registrarse"
      footerHref="/register"
    >
      <Input
        name={"username"}
        value={formState.username}
        onChange={onInputChange}
        label={"Usuario"}
      />
      <Input
        name={"password"}
        value={formState.password}
        onChange={onInputChange}
        label={"Contraseña"}
        type="password"
      />
      <a href="#" className="text-xs text-purple-600 hover:underline">
        Olvido su contraseña?
      </a>
      <Button label="Entrar" />
    </Layout>
  );
};
