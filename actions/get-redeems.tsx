import { currentUser, redirectToSignIn } from "@clerk/nextjs";

const getRedeems = async (): Promise<any> => {
  try {
    const user = await currentUser();

    if (!user) {
      return redirectToSignIn();
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}//users?userId=${user.id}`
      //   `${process.env.NEXT_PUBLIC_API_URL}/api/usersv2/${id}/redeems`
    );

    return res.json();
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getRedeems;
