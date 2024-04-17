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

import { BookingForm } from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../services/api";

export const BookingPage = () => {
  const navigate = useNavigate();

  const updateTimes = (state, action) => {
    if (action.type === "UpdateDate")
      return { ...state, selectedDate: action.selectedDate };
    else if (action.type === "UpdateTime")
      return { ...state, availableTimes: action.availableTimes };

    return state;
  };

  const [state, dispatch] = useReducer(updateTimes, {
    selectedDate: "",
    availableTimes: [],
  });

  useEffect(() => {
    const response = fetchAPI(state.selectedDate);

    dispatch({
      type: "UpdateTime",
      availableTimes: response,
    });
  }, [state.selectedDate]);

  const handleSubmit = (formData) => {
    const response = submitAPI(formData);
    if (response) {
      navigate("/ConfirmedBooking");
    }
  };

  return (
    <VStack marginTop="10">
      <Card>
        <CardHeader>
          <Heading size="md">Book Now</Heading>
        </CardHeader>
        <CardBody>
          <BookingForm
            availableTimes={state.availableTimes}
            onChangeDate={(e) =>
              dispatch({ type: "UpdateDate", selectedDate: e.target.value })
            }
            onSubmit={handleSubmit}
          />
        </CardBody>
      </Card>
    </VStack>
  );
};
