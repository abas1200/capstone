import React from "react";
import {
  Center,
  Grid,
  GridItem,
  Text,
  Flex,
  Box,
  Button,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { MENU_SPECIAL } from "../constatnts";

const Specials = () => {
  return (
    <Center>
      <Grid
        width="70%"
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={3}>
          <Flex paddingLeft="5" paddingTop="10" gap="45%" width="80%">
            <Box>
              <Text fontSize="30px" fontWeight="700" fontFamily="serif">
                This weeks specials!
              </Text>
            </Box>
            <Box>
              <Button colorScheme="yellow">Online Menu</Button>
            </Box>
          </Flex>
        </GridItem>

        {MENU_SPECIAL.map((item,index) => (
          <GridItem key={index} borderRadius="10" rowSpan={3} colSpan={1} bg="#EDEFEE">
            <Box borderRadius="10">
              <Image
                width="100%"
                height="200"
                objectFit="cover"
                src={`../images${item.image}`}
                alt="menu item"
              />
            </Box>
            <Box margin={3} height={150}>
              <VStack spacing={2}>
                <HStack>
                  <Text fontSize="16px" fontWeight="700" fontFamily="serif">
                    {item.title}
                  </Text>
                  <Text fontSize="16px" fontWeight="700" color="#EE9972">
                    ${item.price}
                  </Text>
                </HStack>
                <Text fontSize="12px" color="#333333">
                  {item.text}
                </Text>
              </VStack>
            </Box>
            <Box margin={3}>
              <VStack spacing={2}>
                <HStack>
                  <Text fontSize="16px" fontWeight="700" fontFamily="serif">
                    Order a delivery
                  </Text>
                </HStack>
              </VStack>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Center>
  );
};
export default Specials;
