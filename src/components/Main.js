import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About } from "./pages";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
      </Routes>
    </main>
  );
};
export default Main;
