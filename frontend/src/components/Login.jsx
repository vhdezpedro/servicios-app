import React, { useState } from "react";

function Login({ visible, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { username, password });

    setPassword("");
    setUsername("");
    onClose();
  };

  if (!visible) return null;

  return (
    <div className="absolute top-1/3 flex w-full justify-center items-center z-10 opacity-95">
      <div className="flex flex-col gap-5 justify-center items-center w-60 border rounded-2xl p-3 font-['Roboto'] text-sm bg-white">
        <h3 className="text-2xl font-bold">Login</h3>
        <form
          className="flex flex-col gap-2 items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-30 border border-gray-500 rounded-full px-2 text-xs py-0.5"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Contrasena"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-30 border border-gray-500 rounded-full px-2 text-xs py-0.5"
          />
          <div className="flex gap-2.5 mt-5">
            <button
              className="rounded-md px-2 py-0.5 bg-blue-700 text-white font-medium transition-colors duration-200 hover:bg-blue-600 cursor-pointer"
              type="submit"
            >
              Entrar
            </button>
            <button
              type="button"
              className="rounded-md px-2 py-0.5 bg-red-700 text-white font-medium transition-colors duration-200 hover:bg-red-600 cursor-pointer"
              onClick={onClose}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
