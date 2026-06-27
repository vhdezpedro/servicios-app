import React from "react";

function Hero() {
  return (
    <section className="flex flex-col gap-4 mt-7 py-15 text-center items-center w-9/10 place-self-center shadow-[0px_5px_15px_10px_rgba(0,0,0,0.1)] rounded-xl">
      <h1 className="text-4xl font-bold">Bienvenido a Nuestros Servicios</h1>
      <p className="text-sm w-130 opacity-60">
        Descubre una amplia gama de servicios digitales disenados para impulsar
        tu negocio.
      </p>
    </section>
  );
}

export default Hero;
