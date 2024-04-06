import React from "react";
import {
  Center,
  Grid,
  GridItem,
  Text,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";

const Specials = () => {
  return (
    <Center>
      <Grid
        h="100%"
        width="70%"
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={3}>
          <Flex paddingLeft="5" paddingTop="10" gap="45%" width="80%">
            <Box >
              <Text fontSize="30px" fontWeight="700" fontFamily="serif">
                This weeks specials!
              </Text>
            </Box>
            <Box  >
              <Button colorScheme="yellow">
                Online Menu
              </Button>
            </Box>
          </Flex>
        </GridItem>
        <GridItem rowSpan={3} colSpan={1} bg="papayawhip" />
        <GridItem rowSpan={3} colSpan={1} bg="papayawhip" />
        <GridItem rowSpan={3} colSpan={1} bg="papayawhip" />
      </Grid>
    </Center>
  );
};
export default Specials;
