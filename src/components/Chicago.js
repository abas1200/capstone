import React from "react";
import { Flex, Container, Text, Box, Image } from "@chakra-ui/react";

const Chicago = () => {
  return (
    <Flex marginLeft="20%" gap="30">
      <Container paddingTop="20" maxW="40%">
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
        <Box paddingTop="10">
          <Text fontSize="18px" color="white">
            we are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Text>
        </Box>
      </Container>
      <Box paddingTop="40" maxW="md">
        <Image
          borderRadius="10"
          boxSize="250"
          objectFit="cover"
          src={"../restauranfood.jpg"}
          alt="restaurant food"
        />
      </Box>
    </Flex>
  );
};
export default Chicago;
