import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Main/Banner";
import FoodStore from "./components/Main/FoodStore";
import Hero from "./components/Main/Hero";
import Info from "./components/Main/Info";
import InfoYear from "./components/Main/InfoYear";
import Product from "./components/Main/Product";
import Product2 from "./components/Main/Product2";
import Service from "./components/Main/Service";


function App() {
  return (
    <>
      {/* <Header></Header> */}
      <Hero></Hero>
      <Service></Service>
      <Product></Product>
      <Product2></Product2>
      <Banner></Banner>
      <Info></Info>
      <InfoYear></InfoYear>
      <FoodStore></FoodStore>
    </>
  );
}

export default App;
