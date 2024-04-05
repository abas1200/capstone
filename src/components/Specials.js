import React from "react";
import { Center,Grid, GridItem, Text, Box, Image, Button } from "@chakra-ui/react";
 
const Specials = () => {
  return (
    < Center>
    <Grid
    h='500px'
    width="65%"
    templateRows='repeat(4, 1fr)'
    templateColumns='repeat(3, 1fr)'
    gap={4}
  >
   <GridItem rowSpan={1} colSpan={3}   />
    <GridItem rowSpan={3} colSpan={1} bg='papayawhip' />
    <GridItem rowSpan={3} colSpan={1} bg='papayawhip' />
    <GridItem rowSpan={3} colSpan={1} bg='papayawhip' />
  </Grid> </Center>
  );
};
export default Specials;
