import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Container } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../pages/theme";

const Layout = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default Layout;
