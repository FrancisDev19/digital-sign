import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import { hasCookie } from "cookies-next";

export async function getServerSideProps({ req, res }) {
  const isAuthenticated = hasCookie("session", { req, res });

  return {
    props: {
      isAuthenticated,
    },
  };
}

export default function Home({ isAuthenticated }) {
  console.log(isAuthenticated);

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <Hero />
      <Footer />
    </>
  );
}
