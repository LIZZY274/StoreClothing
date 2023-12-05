import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from '../../assets/logo.svg'

function LoginForm() {
  const { login } = useAuth();
  const [correo, setCorreo] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
    const [users, setUsers] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    axios
      .get("http://54.86.213.148:3000/api/usuarios")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos de usuarios", error);
      });
  }, []);

  const handleLogin = () => {
    const user = users.find(
      (user) => user.correo === correo && user.contrasenia === contrasenia
    );

    if (user) {
      login(user);
      setLoggedIn(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Credenciales incorrectas",
        text: "Por favor, verifica tu correo electrónico y contraseña.",
        confirmButtonText: "OK",
        timer: "3000"
      });
    }
  }

  if (loggedIn) {
    if (user.rol === "cliente") {
      return <Navigate to="/home" />;
    } else if (user.rol === "administrador") {
      return <Navigate to="/home/admin" />;
    }
  }

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-48"
            src={logo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-[#4a8549e1]"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={contrasenia}
                  onChange={(e) => setContrasenia(e.target.value)}
                  autoComplete="current-password"
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleLogin}
                className="flex w-full justify-center rounded-md bg-[#4a8549e1] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#5d8c5be1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <Link to="/registro">
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <a
                href="#"
                className="font-semibold leading-6 text-[#4a8549e1] "
              >
                Registrate
              </a>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
