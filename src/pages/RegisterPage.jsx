import React, { useContext } from "react";
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
      title="Registrarse"
      handleSubmit={handleSubmit}
      footerLabel="¿Ya posee una cuenta?"
      footerLinkLabel="Entrar"
      footerHref="/login"
    >
      <Input
        name={"name"}
        value={formState.name}
        onChange={onInputChange}
        label={"Nombre"}
      />
      <Input
        name={"email"}
        value={formState.email}
        onChange={onInputChange}
        label={"Correo electrónico"}
        type="email"
      />
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
      <Button label="Registrar" />
    </Layout>
  );
};
