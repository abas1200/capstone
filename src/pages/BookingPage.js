import React, { useState } from "react";
import { Card, CardBody, Button, VStack } from "@chakra-ui/react";
import "./style.css";

export const BookingPage = () => {
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
  }

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <VStack marginTop="10">
      <Card>
        <CardBody>
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
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
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
            <Button colorScheme="yellow" onClick={handleSubmit}>
              Make Your reservation
            </Button>
          </form>
        </CardBody>
      </Card>
    </VStack>
  );
};
