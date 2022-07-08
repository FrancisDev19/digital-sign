import React from "react";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async (e) => {
    e.preventDefault();

    const { status } = await axios({
      method: "post",
      url: "/api/auth/logout",
    });

    if (status === 200) {
      if (router.pathname === "/") {
        router.reload();
      }

      router.push("/");
    }
  };

  return (
    <Button variant={"ghost"} type={"button"} onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
