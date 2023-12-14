"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export async function createNewRedeem() {
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/usersv2/user_2ZGX6ALyoW0Y9mw37KfLQZoadsC/redeems`,
      {
        amount: 10,
        bank: "dummybank@bank",
      }
    );

    revalidatePath("/");
  } catch (error) {
    return error;
  }
}
