import React from "react";
import { Flex, Container, Text, Box, Image, Button } from "@chakra-ui/react";

const slide = {
  position: "absolute",
  paddingTop: "75px",
  paddingLeft:"200px"
};

const Chicago = () => {
  return (
    <>
      <Flex gap="100" width="100%" bg="#495E57">
        <Box paddingTop="2" paddingLeft="21%" maxW="40%">
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
          <Button marginBottom="10" colorScheme="yellow">
            Reserve a Table
          </Button>
        </Box>
      </Flex>
      <Box style={slide} maxW="md">
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
