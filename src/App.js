import React from "react";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
