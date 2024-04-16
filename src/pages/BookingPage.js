import React, { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Button,
  VStack,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import "./style.css";
import { getAvailableTimes, setReservedTime } from "../stores/store";

const BookingForm = ({ availableTimes, onChangeDate, onSubmit }) => {
  const [formData, setFormData] = useState({
    resDate: "",
    resTime: "",
    guests: "",
    occasion: "Birthday",
  });

  useEffect(() => {
    if (availableTimes?.length) {
      setFormData((prev) => ({
        ...prev,
        resTime: availableTimes[0],
      }));
    }
  }, [availableTimes]);

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
     {formData.resDate && availableTimes?.length == 0 && <label style={{color:"red"}}>No Free Slot!</label>}
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
      <Button
        colorScheme="yellow"
        onClick={(e) => onSubmit(formData)}
        isDisabled={Object.values(formData).filter((v) => v == "").length > 0}
      >
        Make Your reservation
      </Button>
    </form>
  );
};

export const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate();

  const updateTimes = (state, action) => {
    if (action.type === "update") {
      setSelectedDate(action.selectedDate);
      const t = getAvailableTimes(action.selectedDate);
      return t;
    }
    return state;
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  useEffect(() => {
    // const availableTimes = async (date) => {
    //   const response = await fetchAPI(selectedDate);
    //   return response?.data;
    // };
  }, [selectedDate]);

  const handleSubmit = async (formData) => {
    // const response = await submitAPI(formData);
    // if(response.data)
    // {
    // }
    setReservedTime(formData.resDate, formData.resTime);
    navigate("/ConfirmedBooking");
  };

  return (
    <VStack marginTop="10">
      <Card>
        <CardHeader>
          <Heading size="md">Book Now</Heading>
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
