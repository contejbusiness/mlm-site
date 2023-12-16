import { User } from "@/types";
import { currentUser, redirectToSignIn } from "@clerk/nextjs";

const getCurrentUser = async (): Promise<User> => {
  try {
    const user = await currentUser();

    if (!user) {
      return redirectToSignIn();
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users?userId=${user.id}`
    );

    return res.json();
  } catch (error: any) {
    return error;
  }
};

export default getCurrentUser;
