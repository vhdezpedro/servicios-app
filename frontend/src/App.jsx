import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Login from "./components/Login";
import ServiceCard from "./components/ServiceCard";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <section className="mt-10 w-9/10 place-self-center">
        <h3 className="mb-5 text-2xl font-bold text-center">
          Nuestros Servicios
        </h3>
        <div className="grid grid-cols-2 gap-5 ">
          <ServiceCard />
          <ServiceCard />
        </div>
      </section>
      <Footer />
      <Login />
    </>
  );
}

export default App;
