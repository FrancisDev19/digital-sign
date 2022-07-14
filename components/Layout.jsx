import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Container } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../pages/theme";
import { AuthProvider } from "../context/auth-context";

const Layout = ({ children }) => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Navbar />
        {children}
        <Footer />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default Layout;
