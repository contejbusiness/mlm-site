import { initialProfile } from "@/lib/initial-profile";
import { User } from "@/types";
import { currentUser, redirectToSignIn } from "@clerk/nextjs";

const getCurrentUser = async () => {
  try {
    const user = await currentUser();
    console.log("🚀 ~ file: get-user.tsx:7 ~ getCurrentUser ~ user:", user);

    if (!user?.id) {
      return redirectToSignIn();
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users?userId=${user.id}`
    );

    if (res.status == 400) {
      const user = await initialProfile();
      console.log("🚀 ~ file: get-user.tsx:20 ~ getCurrentUser ~ user:", user);
      return user != null ? user.json() : null;
    }

    return res.json();
  } catch (error) {
    return null;
  }
};

export default getCurrentUser;
