import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./component/Hero";
import Banner from "./component/Banner";
import Product from "./component/Product";
import UserProduct from "./component/UserProduct";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Hero />
      <Banner />
      <Product />
      <UserProduct />
      <Footer />
    </>
  );
}

export default App;
