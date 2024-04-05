import React from "react";
import Chicago from "../components/Chicago";
import Specials from "../components/Specials";
import { Center, Grid, GridItem } from "@chakra-ui/react";

export const HomePage = () => {
  return (
    <>
      <Center>
       <Chicago /> 
       
        
      </Center>
       <Specials /> 
     </>
  );
};
