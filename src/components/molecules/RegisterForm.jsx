// RegisterForm.jsx
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import InputsAdmin from "./InputsAdmin";

function RegisterForm() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [rol] = useState("cliente"); // Establecer automáticamente el rol como "cliente"

  const handleRegister = async (e) => {
    e.preventDefault();

    if (nombre === "" || apellido === "" || correo === "" || contrasenia === "") {
      Swal.fire({
        icon: "error",
        title: "Campos vacíos",
        text: "Por favor, asegúrate de llenar todos los campos.",
        confirmButtonText: "OK",
      });
    } else {
      try {
        const response = await axios.post("http://54.86.213.148:3000/api/usuarios", {
          nombre,
          apellido,
          correo,
          contrasenia,
          rol,
        });

        if (response.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Registro exitoso",
            text: "Tu cuenta ha sido registrada con éxito.",
            confirmButtonText: "OK",
          });
        } else {
          console.error("Error en el registro");
        }
      } catch (error) {
        console.error("Error en el registro", error);

        Swal.fire({
          icon: "error",
          title: "Error en el registro",
          text: "Hubo un error al registrar tu cuenta. Por favor, inténtalo de nuevo.",
          confirmButtonText: "OK",
        });
      }
    }
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registro
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleRegister}>
            <InputsAdmin
                title="Nombre"
                id="nombre"
                name="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />

            <div>
              <label htmlFor="apellido" className="block text-sm font-medium leading-6 text-gray-900">
                Apellido
              </label>
              <div className="mt-2">
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="correo" className="block text-sm font-medium leading-6 text-gray-900">
                Correo Electrónico
              </label>
              <div className="mt-2">
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  autoComplete="off" // Cambiado de "email" a "off"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="contrasenia" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="contrasenia"
                  name="contrasenia"
                  type="password"
                  autoComplete="off" // Cambiado de "new-password" a "off"
                  value={contrasenia}
                  onChange={(e) => setContrasenia(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#4a8549e1] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#5d8c5be1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Registrarse
              </button>
            </div>
          </form>
          <Link to="/login">
            <p className="mt-10 text-center text-sm text-gray-500">
              ¿Ya eres miembro?{" "}
              <a
                href="#"
                className="font-semibold leading-6 text-[#4a8549e1] hover:text-indigo-500"
              >
                Iniciar sesión
              </a>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
