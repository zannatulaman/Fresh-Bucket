import { createContext, useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Main/Banner";
import FoodStore from "./components/Main/FoodStore";
import Footer from "./components/Main/Footer";
import Hero from "./components/Main/Hero";
import Info from "./components/Main/Info";
import InfoYear from "./components/Main/InfoYear";
import Product from "./pages/product/Product";
import Product2 from "./components/Main/Product";
import Service from "./components/Main/Service";
import Cookies from "js-cookie";

// Create Context
export const ExampleContext = createContext();

function App() {
  // Ensure token is always a string
  const [token, setToken] = useState("");

  // Debugging: Check token value after state update
  useEffect(() => {

    const authToken = Cookies.get("auth_token");
    setToken(authToken);
    console.log("Updated Token:", token);
  }, [token]);

  return (
    <ExampleContext.Provider value={{ token, setToken }}>
      <>
        <Hero />
        <Service />
        {/* <Product /> */}
        <Product2 />
        <Banner />
        <Info />
        <InfoYear />
        <FoodStore />
      </>
    </ExampleContext.Provider>
  );
}

export default App;
