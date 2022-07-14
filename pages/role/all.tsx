import { GetServerSideProps } from "next";
import React from "react";
import { Roles } from "../api/role/roles";

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
  const {accessToken} = req.cookies;
  const data = await Roles(accessToken);

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      data
    },
  }
}

const all = () => {

  return <div>all</div>;
};

export default all;
