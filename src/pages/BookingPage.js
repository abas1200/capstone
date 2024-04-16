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
import { BookingForm } from "../components/BookingForm";


export const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate();

  const updateTimes = (state, action) => {
    if (action.type === "update") {
      setSelectedDate(action.selectedDate);
      return getAvailableTimes(action.selectedDate);
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
