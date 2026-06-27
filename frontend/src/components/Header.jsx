import React from "react";

function Header() {
  return (
    <div className=" h-15 flex justify-between font-['Roboto'] bg-indigo-400 items-center">
      <h1 className="text-2xl font-bold p-3 text-white">Servicios Digitales</h1>
      <div className="flex gap-2 items-center">
        <h3 className="text-sm">
          Hola, <span className="text-green-300 font-bold">Super Admin</span>!
        </h3>
        <button className="h-8.5 text-sm rounded-sm border-2 px-2 bg-indigo-400 text-white font-semibold border-white cursor-pointer">
          Ir a Dashboard
        </button>
        <button className="h-8.5 text-sm rounded-sm px-2 bg-red-600 text-white font-semibold cursor-pointer">
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}

export default Header;
