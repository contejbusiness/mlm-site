import React from "react";
import Navbar from "./ui/v2/navbar";
import getCurrentUser from "@/actions/get-user";

const NavWrapper = async () => {
  const user = await getCurrentUser();

  return <Navbar user={user} />;
};

export default NavWrapper;
