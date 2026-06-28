import React from "react";
import Hero from "./Hero";
import ServiceCard from "./ServiceCard";

function Home({ services }) {
  return (
    <>
      <Hero />
      <section className="mt-10 w-9/10 place-self-center">
        <h3 className="mb-5 text-2xl font-bold text-center">
          Nuestros Servicios
        </h3>
        <div className="grid grid-cols-2 gap-5 ">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.nombre}
              description={service.descripcion}
              price={service.precio}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
