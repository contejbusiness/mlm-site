import React from "react";
import Navbar from "./ui/v2/navbar";
import getCurrentUser from "@/actions/get-user";

const NavWrapper = async () => {
  // const user = await getCurrentUser();

  // if (!user) return "";

  return <div>{/* <Navbar user={user} /> */}</div>;
};

export default NavWrapper;
