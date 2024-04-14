import React, { useState } from "react";
import { Card,CardBody, Button, VStack } from "@chakra-ui/react";
import "./style.css";

export const BookingPage = () => {
  const [formData, setFormData] = useState();

  const handleSubmit = () => {};

  return ( <VStack marginTop="10"> 
    <Card maxW="500"><CardBody>
     
      <form onSubmit={handleSubmit()}>
        <label htmlFor="res-date">Choose date:</label>
        <input type="date" id="res-date" /><br/>
        <label htmlFor="res-time">Choose time:</label>
        <input type="date" id="res-date" /><br/>
        <label htmlFor="res-time">Choose time:</label>
        <select id="res-time ">
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select><br/>
        <label htmlFor="guests">Number of guests:</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" /><br/>
        <label htmlFor="occasion">Occasion:</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select><br/><br/>
        <Button colorScheme="yellow">Make Your reservation</Button>
         
      </form>
      </CardBody>
      </Card></VStack>
  );
};
