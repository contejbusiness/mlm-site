import React from "react";
import Navbar from "./ui/v2/navbar";
import getCurrentUser from "@/actions/get-user";
import { redirectToSignIn } from "@clerk/nextjs";

const NavWrapper = async () => {
  const user = await getCurrentUser();

  if (user.error) {
    return <h1>Failed to Get User</h1>;
  }

  return (
    <div>
      <Navbar user={user} />
    </div>
  );
};

export default NavWrapper;
