import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import "../pages/style.css";

export const BookingForm = ({ availableTimes, onChangeDate, onSubmit }) => {
  const [formData, setFormData] = useState({
    resDate: "",
    resTime: "",
    guests: "",
    occasion: "Birthday",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (availableTimes?.length) {
      setFormData((prev) => ({
        ...prev,
        resTime: availableTimes[0],
      }));
    }
  }, [availableTimes]);

  const handleChange = (event) => {
    setFormSubmitted(false);
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    if (onChangeDate && event.target.name === "resDate") onChangeDate(event);
  };

  const validateForm = () => {
    setFormSubmitted(true);
    return Object.values(formData).filter((v) => v == "").length == 0;
  };

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
      {formSubmitted && !formData.resDate && <label className="required" />}
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
      {formSubmitted && !formData.resTime && <label className="required" />}
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
      {formSubmitted && !formData.guests && <label className="required" />}
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
        onClick={(e) => {
          if (validateForm()) onSubmit(formData);
        }}
      >
        Make Your reservation
      </Button>
    </form>
  );
};
