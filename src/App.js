import React, { useState } from "react";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

export default function App() {
  const [display, setDisplay] = useState("flex");

  return (
    <div>
      <NavBar setDisplay={setDisplay} />
      <Home display={display} />
      <Footer />
    </div>
  );
}
