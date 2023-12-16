"use client";
import React, { useEffect } from "react";

import { User } from "@/types";
import { useRouter } from "next/navigation";

interface LoadUserComponentProps {
  user: User;
}

const LoadUserComponent: React.FC<LoadUserComponentProps> = ({ user }) => {
  const router = useRouter();

  router.push("/refferCode");

  return <div></div>;
};

export default LoadUserComponent;
