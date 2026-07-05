import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import { useEffect } from "react";
import { getServices } from "./api/services";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

function App() {
  const [admins, setAdmins] = useState({});
  const [services, setServices] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [login, setLogin] = useState(false);

  console.log(admins);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await getServices();
        setServices(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadServices();
  }, []);

  const handleLogout = () => {
    setAdmins({});
    setLogin(false);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-10 bg-gray-500 transition-all duration-500 ${
          showLogin ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
      ></div>
      <Header
        onShowLogin={() => setShowLogin(true)}
        onLogout={handleLogout}
        admins={admins}
        login={login}
      />
      {/* <Dashboard /> */}
      <Home services={services} />
      <Footer />
      <Login
        visible={showLogin}
        onClose={() => setShowLogin(false)}
        setAdmins={setAdmins}
        setLogin={setLogin}
      />
    </>
  );
}

export default App;
