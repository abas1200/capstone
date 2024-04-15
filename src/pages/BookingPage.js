import React, { useState, useReducer } from "react";
import {
  Card,
  CardBody,
  Button,
  VStack,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import "./style.css";

const BookingForm = ({ availableTimes, onChangeDate, onSubmit }) => {
  const [formData, setFormData] = useState({
    resDate: "",
    resTime: "",
    guests: "",
    occasion: "",
  });

  function handleChange(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    if (onChangeDate && event.target.name === "resDate") onChangeDate(event);
  }

  return (
    <form className="form-style">
      <label htmlFor="res-date">Choose date:</label>
      <input
        type="date"
        id="res-date"
        name="resDate"
        value={formData.resDate}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="res-time">Choose time:</label>
      <select
        id="res-time "
        name="resTime"
        value={formData.resTime}
        onChange={handleChange}
      >
        {availableTimes?.map((t, index) => (
          <option key={index}>{t}</option>
        ))}
      </select>
      <br />
      <label htmlFor="guests">Number of guests:</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="occasion">Occasion:</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <br />
      <br />
      <Button colorScheme="yellow" onClick={(e) => onSubmit(formData)}>
        Make Your reservation
      </Button>
    </form>
  );
};

export const BookingPage = () => {
  const InitializeTimes = ["18:00", "19:00", "20:00", "21:00", "22:00"];

  const updateTimes = (state, action) => {
    if (action.type === "update") {
      //console.log(action.selectedDate);
      return state;
    }
    return state;
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, InitializeTimes);

  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <VStack marginTop="10">
      <Card>
        <CardHeader>
        <Heading size='md'>Book Now</Heading>
        </CardHeader>
        <CardBody>
          <BookingForm
            availableTimes={availableTimes}
            onChangeDate={(e) =>
              dispatch({ type: "update", selectedDate: e.target.value })
            }
            onSubmit={handleSubmit}
          />
        </CardBody>
      </Card>
    </VStack>
  );
};
