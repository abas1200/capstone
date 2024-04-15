import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, BookingPage, ConfirmedBooking, About } from "../pages";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};

export default Main;
