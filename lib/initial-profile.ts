import { User } from "@/types";
import axios from "axios";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const initialProfile = async () => {
  try {
    const { getUser } = getKindeServerSession();

    const user = getUser();
    console.log(
      "🚀 ~ file: initial-profile.ts:11 ~ initialProfile ~ user:",
      user
    );

    if (!user) {
      redirect("/api/auth/login");
    }

    const createUser = {
      id: user.id,
      name: user.given_name + " " + user.family_name,
      email: "test@email.com",
    };

    const user_ = await axios.post<User>(
      `${process.env.NEXT_PUBLIC_API_URL}/users`,
      createUser
    );
    console.log(
      "🚀 ~ file: initial-profile.ts:31 ~ initialProfile ~ user_:",
      user_
    );
    return user_?.data;
  } catch (error) {
    console.log(
      "🚀 ~ file: initial-profile.ts:26 ~ initialProfile ~ error:",
      error
    );
    return null;
  }
};
