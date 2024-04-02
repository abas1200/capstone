import React from "react";
import Chicago from "../components/Chicago";
import { Center, Grid, GridItem } from "@chakra-ui/react";

export const HomePage = () => {
  return (
    <>
      <Grid templateRows="repeat(3, 1fr)" gap={4}>
        <Center>
          <GridItem maxWidth="65%" maxHeight="250"  bg="#495E57">
            <Chicago /> 
          </GridItem>
        </Center>
      </Grid>
    </>
  );
};
