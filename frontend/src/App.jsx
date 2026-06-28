import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Login from "./components/Login";
import ServiceCard from "./components/ServiceCard";

const services = [
  {
    id: 1,
    name: "Servicio 1",
    description: "Esta es la descripción del servicio",
    price: "$2,000",
  },
  {
    id: 2,
    name: "Servicio 2",
    description: "Esta es la descripción del servicio",
    price: "$3,500",
  },
];

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div
        className={`fixed inset-0 z-10 bg-gray-500 transition-all duration-500 ${
          showLogin ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
      ></div>
      <Header
        onShowLogin={() => setShowLogin(true)}
        onLogout={() => console.log("Cerrar sesión")}
      />
      <Hero />
      <section className="mt-10 w-9/10 place-self-center">
        <h3 className="mb-5 text-2xl font-bold text-center">
          Nuestros Servicios
        </h3>
        <div className="grid grid-cols-2 gap-5 ">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>
      </section>
      <Footer />
      <Login visible={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
}

export default App;
