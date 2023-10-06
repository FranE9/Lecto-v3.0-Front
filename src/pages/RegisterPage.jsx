import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../hook/useForm";
import loginBackground from "../../src/assets/images/backgroundLogin.png";


export const RegisterPage = () => {
  const navigate = useNavigate();

  const { name, email, password, onInputChange, onResetForm } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onRegister = (e) => {
    e.preventDefault();

    navigate("/dashboard", {
      replace: true,
      state: {
        logged: true,
        name,
      },
    });

    onResetForm();
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden" style={{ backgroundImage: `url(${loginBackground})` }}>
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
          Registrarse
        </h1>
        <form onSubmit={onRegister} className="mt-6">
          <div className="mb-2">
            <label
              for="name"
              className="block text-sm font-semibold text-gray-800"
            >
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={onInputChange}
              required
              autoComplete="off"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={onInputChange}
              required
              autoComplete="off"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={onInputChange}
              required
              autoComplete="off"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Registrar
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          ¿Ya posee una cuenta?{" "}
          <Link
            to="/login"
            className="font-medium text-purple-600 hover:underline"
          >
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
};
