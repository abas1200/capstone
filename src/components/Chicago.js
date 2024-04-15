import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Container, Text, Box, Image, Button } from "@chakra-ui/react";

const slide = {
  position: "absolute",
  paddingTop: "2%",
  paddingLeft: "250px",
};

const Chicago = () => {
  const navigate = useNavigate();

  return (
    <>
      <Flex gap="150" width="70%" bg="#495E57">
        <Box paddingTop="2" paddingLeft="10%" maxW="40%">
          <Text
            fontSize="28px"
            fontWeight="700"
            fontFamily="serif"
            color="#F4CE14"
          >
            Little Lemon
          </Text>
          <Text fontSize="20px" fontFamily="serif" color="white">
            Chicago
          </Text>

          <Text fontSize="18px" color="white">
            we are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Text>
          <br />
          <Button
            marginBottom="10"
            colorScheme="yellow"
            onClick={() => navigate("/booking")}
          >
            Reserve a Table
          </Button>
        </Box>
      </Flex>
      <Box style={slide} maxW="50%">
        <Image
          borderRadius="10"
          boxSize="250"
          objectFit="cover"
          src={"../images/restauranfood.jpg"}
          alt="restaurant food"
        />
      </Box>
    </>
  );
};
export default Chicago;
