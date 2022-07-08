import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { hasCookie } from "cookies-next";

export const getServerSideProps = async (ctx) => {
  const isAuthenticated = hasCookie("session");
  console.log(isAuthenticated)

  return {
    props: {
      isAuthenticated,
    },
  };
};

export default function Home({ isAuthenticated }) {
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <Hero />
      <Footer />
    </>
  );
}
