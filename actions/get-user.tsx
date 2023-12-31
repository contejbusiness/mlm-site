import { initialProfile } from "@/lib/initial-profile";
import { User } from "@/types";
// import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const getCurrentUser = async () => {
  try {
    // const user = await currentUser();
    const { getUser, isAuthenticated } = getKindeServerSession();

    console.log(
      "🚀 ~ file: get-user.tsx:7 ~ getCurrentUser ~ user:",
      getUser()
    );

    if (!getUser()?.id) {
      // return redirectToSignIn();
      console.log("User doesn't exist");
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users?userId=${getUser()?.id}`
    );

    if (res.status == 400) {
      const user = await initialProfile();
      console.log("🚀 ~ file: get-user.tsx:20 ~ getCurrentUser ~ user:", user);
      return user != null ? user : null;
    }

    return res.json();
  } catch (error) {
    return null;
  }
};

export default getCurrentUser;
