import React from "react";

function Login() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex flex-col gap-5 justify-center items-center w-60 border rounded-2xl p-3 font-['Roboto'] text-sm">
        <h3 className="text-2xl font-bold">Login</h3>
        <form className="flex flex-col gap-2 items-center" action="submit">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Usuario"
            className="w-30 border border-gray-500 rounded-full px-2 text-xs py-0.5"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Contrasena"
            className="w-30 border border-gray-500 rounded-full px-2 text-xs py-0.5"
          />
          <div className="flex gap-2.5 mt-5">
            <button
              className="rounded-md px-2 py-0.5 bg-blue-700 text-white font-medium transition-colors duration-300 hover:bg-blue-600"
              type="submit"
            >
              Entrar
            </button>
            <button className="rounded-md px-2 py-0.5 bg-red-700 text-white font-medium transition-colors duration-300 hover:bg-red-600">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
