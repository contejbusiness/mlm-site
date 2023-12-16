import { User } from "@/types";
import { currentUser, redirectToSignIn } from "@clerk/nextjs";

const getCurrentUser = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      return redirectToSignIn();
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users?userId=${user.id}`
    );
    console.log("🚀 ~ file: get-user.tsx:16 ~ getCurrentUser ~ res:", res);

    return res.json();
  } catch (error) {
    return { error: true };
  }
};

export default getCurrentUser;
