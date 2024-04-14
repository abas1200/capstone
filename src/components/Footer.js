import { Flex, Box} from "@chakra-ui/react";

const Footer = () => {
  return( 
  <Box marginTop="2" backgroundColor="#EDEFEE">
      <footer>
        <Flex 
          margin="0 auto"
          px={10}
          justifyContent="center"
          alignItems="center"
          maxWidth="80%"
          height={5}
        >
          <p>LittelLemon.com</p>
        </Flex>
      </footer>
    </Box>)
};
export default Footer;
