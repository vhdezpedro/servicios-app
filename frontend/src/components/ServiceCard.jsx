import React from "react";

function ServiceCard({ name, description, price }) {
  return (
    <div className="flex flex-col px-4 py-6 justify-between rounded-lg shadow-[8px_0px_7px_0px_rgba(0,0,0,0.1)] border-l-4 border-blue-500 h-35 cursor-pointer transition-transform duration-200 hover:-translate-y-2 hover:translate-x-0.5">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-xs opacity-60">{description}</p>
      <p className="text-indigo-400 font-semibold">{price}</p>
    </div>
  );
}

export default ServiceCard;
