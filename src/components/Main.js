import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, BookingPage, ConfirmedBooking, About } from "../pages";
import Chicago from "../components/Chicago";
import { Center } from "@chakra-ui/react";

const Main = () => {
  return (
    <main>
      <Center>
        <Chicago />
      </Center>
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
