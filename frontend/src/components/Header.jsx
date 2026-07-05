import React from "react";

function Header({ onShowLogin, onLogout, admins, login }) {
  const { username, rol } = admins;

  const handleLogin = () => {
    if (login) return onLogout();

    onShowLogin();
  };
  return (
    <header className=" h-15 flex justify-between font-['Roboto'] bg-indigo-400 items-center px-3">
      <h1 className="text-2xl font-bold text-white">Servicios Digitales</h1>
      <div className="flex gap-2 items-center">
        <h3 className={`text-sm ${!username ? "hidden" : ""}`}>
          Hola <span className="font-bold capitalize">{username}</span>
          {", "}
          <span className="text-green-300 font-bold">{rol}</span>!
        </h3>
        <button
          className="h-8.5 text-sm rounded-sm border-2 px-2 bg-indigo-400 text-white font-semibold border-white cursor-pointer"
          // onClick={}
        >
          Ir a Dashboard
        </button>
        <button
          className={`h-8.5 text-sm rounded-sm px-2 text-white font-semibold cursor-pointer transition-colors duration-200 ${login ? "bg-red-600 hover:bg-red-500" : "bg-green-500 hover:bg-green-400"}`}
          onClick={handleLogin}
        >
          {login ? "Cerrar sesión" : "Log in"}
        </button>
      </div>
    </header>
  );
}

export default Header;
