import { User } from "@/types";
import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import axios from "axios";

export const initialProfile = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      return redirectToSignIn();
    }

    const createUser = {
      id: user.id,
      name: user.firstName + " " + user.lastName,
      email: user?.emailAddresses[0]?.emailAddress,
      phone: user?.phoneNumbers[0]?.phoneNumber,
    };

    const user_ = await axios.post<User>(
      `${process.env.NEXT_PUBLIC_API_URL}/users`,
      createUser
    );
    return user_?.data;
  } catch (error) {
    console.log(
      "🚀 ~ file: initial-profile.ts:26 ~ initialProfile ~ error:",
      error
    );
    return redirectToSignIn();
  }
};
