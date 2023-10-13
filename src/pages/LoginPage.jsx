import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../hook/useForm";
import loginBackground from "../../src/assets/images/backgroundLogin.png";

import axios from "axios";

const AuthApi = React.createContext();
const TokenApi = React.createContext();
import Cookies from "js-cookie";

export const LoginPage = () => {
  const Auth = React.useContext(AuthApi);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    if (evt) {
      evt.preventDefault();
    }
    const form_data = new FormData()

    form_data.append("username", email) // proba
    form_data.append("password", password)
    
    const news = async () => {
          let res = await axios
            .post("http://127.0.0.1:8080/auth/login", form_data)
            .then((response) => {
              console.log(response);
              Cookies.set("token", response.data.access_token);
              return response;
            })
            .catch((error) => {
              console.log(error.message);
            });
          return res;
        };
    let x = await news();
    if (x) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden" style={{ backgroundImage: `url(${loginBackground})` }}>
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
          Iniciar sesion
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="off"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-purple-600 hover:underline">
            Olvido su contraseña?
          </a>
          <div className="mt-6">
            <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Entrar
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          ¿No tienes una cuenta?{" "}
          <Link
            to="/register"
            className="font-medium text-purple-600 hover:underline"
          >
            Registrarse
          </Link>
        </p>
      </div>
    </div>
  );
};

