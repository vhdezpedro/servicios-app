import React from "react";

function ServiceCard() {
  return (
    <div className="flex flex-col px-4 py-6 justify-between rounded-lg shadow-[8px_0px_7px_0px_rgba(0,0,0,0.1)] border-l-4 border-blue-500 h-35 cursor-pointer">
      <h3 className="font-bold text-lg">Servicio 1</h3>
      <p className="text-xs opacity-60">Esta es la descripción del servicio</p>
      <p className="text-indigo-400 font-semibold">$2,000</p>
    </div>
  );
}

export default ServiceCard;
