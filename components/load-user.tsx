"use client";
import React, { useEffect } from "react";
import useUserModal from "@/hooks/use-profile";

interface LoadUserComponentProps {
  user: any;
}

const LoadUserComponent: React.FC<LoadUserComponentProps> = ({ user }) => {
  const { setUser } = useUserModal();

  useEffect(() => {
    setUser(user);
  }, [user]);

  return <div></div>;
};

export default LoadUserComponent;
