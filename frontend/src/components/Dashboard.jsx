import React from "react";

function Dashboard() {
  return (
    <section className="mt-10 w-9/10 place-self-center">
      <div className="py-10 px-5 shadow-[0px_5px_15px_10px_rgba(0,0,0,0.1)] rounded-xl">
        <h2 className="text-2xl font-bold mb-3">Bienvenido, Super Admin!</h2>
        <p className="text-xs" className="text-sm opacity-80">
          Estás logeado como <span className="font-bold">superadmin</span>.
          Tienes acceso completo a todos los servicios y usuarios.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="flex flex-col py-2 justify-center items-center rounded-lg shadow-[0px_0px_10px_3px_rgba(0,0,0,0.1)] cursor-pointer">
          <h3 className="font-bold text-xl text-indigo-400">2</h3>
          <p className="text-xs opacity-60 ">Servicios Totales</p>
        </div>
        <div className="flex flex-col py-2 justify-center items-center rounded-lg shadow-[0px_0px_10px_3px_rgba(0,0,0,0.1)] cursor-pointer">
          <h3 className="font-bold text-xl text-indigo-400">2</h3>
          <p className="text-xs opacity-60">Mis Servicios</p>
        </div>
      </div>
      <div className="mt-8 py-10 shadow-[0px_5px_15px_10px_rgba(0,0,0,0.1)] rounded-xl">
        <div className="px-4">
          <p className="font-bold border-b-2 border-gray-100 mb-4">
            Gestión de Servicios
          </p>
          <button className="bg-blue-600 px-3 py-1.5 text-xs text-white rounded-lg cursor-pointer transition-colors duration-200 hover:bg-blue-500">
            Mostrar Servicios
          </button>
        </div>
        <div className="flex flex-col gap-2 mt-8 px-10">
          <div className="flex justify-between px-5 items-center rounded-lg border-l-4 border-green-600 bg-gray-50">
            <div className="flex flex-col items-center justify-center py-3 w-120">
              <p className="text-xs font-bold">Servicio 1</p>
              <p className="text-xs">
                <span className="font-bold">Precio:</span> $12323.00
              </p>
              <p className="text-xs">
                <span className="font-bold">Descripcion:</span> Descripción del
                servicio
              </p>
              <p className="text-xs">
                <span className="font-bold">Creado por:</span> Usuario (cliente)
              </p>
              <p className="text-xs">
                <span className="font-bold">ID:</span> 20
              </p>
            </div>
            <div className="flex gap-3">
              <button className="bg-yellow-400 px-2.5 py-1.25 cursor-pointer text-xs rounded-lg transition-colors duration-200 hover:bg-yellow-300">
                Editar
              </button>
              <button className="bg-red-700 px-2.5 py-1.25 cursor-pointer text-xs text-white rounded-lg transition-colors duration-200 hover:bg-red-600">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 py-10 px-5 shadow-[0px_5px_15px_10px_rgba(0,0,0,0.1)] rounded-xl">
        <div className="px-4">
          <p className="font-bold border-b-2 border-gray-100 mb-4">
            Crear Nuevo Servicio
          </p>
        </div>
        <form>
          <label className="text-xs font-semibold">Nombre del Servicio:</label>
          <input
            type="text"
            className="border-2 w-full border-gray-200 rounded-lg"
          />
          <label className="text-xs font-semibold">Descripción:</label>
          <textarea className="border-2 w-full border-gray-200 rounded-lg" />
          <label className="text-xs font-semibold">Precio:</label>
          <input
            type="number"
            className="border-2 w-full border-gray-200 rounded-lg"
          />
          <button className="bg-green-600 mt-4 px-2.5 py-1.25 cursor-pointer text-xs text-white rounded-lg transition-colors duration-200 hover:bg-green-500">
            Crear Servicio
          </button>
        </form>
      </div>
      <div className="mt-8 py-10 px-5 shadow-[0px_5px_15px_10px_rgba(0,0,0,0.1)] rounded-xl">
        <div className="px-4">
          <p className="font-bold border-b-2 border-gray-100 mb-4">
            Crear Usuario (Solo Superadmin)
          </p>
        </div>
        <form>
          <label className="text-xs font-semibold">Nombre:</label>
          <input
            type="text"
            className="border-2 w-full border-gray-200 rounded-lg"
          />
          <label className="text-xs font-semibold">Email:</label>
          <input
            type="email"
            className="border-2 w-full border-gray-200 rounded-lg"
          />
          <label className="text-xs font-semibold">Contrasena:</label>
          <input
            type="password"
            className="border-2 w-full border-gray-200 rounded-lg"
          />
          <label className="text-xs font-semibold">Rol:</label>
          <select className="text-xs w-full border-2 border-gray-200 rounded-lg h-7">
            <option value="cliente">Cliente</option>
            <option value="superadmin">Superadmin</option>
          </select>

          <button className="bg-green-600 mt-4 px-2.5 py-1.25 cursor-pointer text-xs text-white rounded-lg transition-colors duration-200 hover:bg-green-500">
            Crear Servicio
          </button>
        </form>
      </div>{" "}
    </section>
  );
}

export default Dashboard;
