import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, BookingPage, About } from "../pages";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};

export default Main;
