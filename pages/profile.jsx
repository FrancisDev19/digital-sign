import { hasCookie } from "cookies-next";
import React from "react";
import LogoutButton from "../components/LogoutButton";

export async function getServerSideProps({ req, res }) {
  const isAuthenticated = hasCookie("session", { req, res });

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: "/signIn",
        permanent: false,
      },
    };
  }

  return {
    props: {
      isAuthenticated,
    },
  };
}

const Profile = () => {
  return (
    <div>
      <p>Profile</p>
      <LogoutButton />
    </div>
  );
};

export default Profile;
