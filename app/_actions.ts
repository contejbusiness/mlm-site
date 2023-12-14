"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export async function createNewRedeem(amount: number, bank: string) {
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/usersv2/user_2ZGX6ALyoW0Y9mw37KfLQZoadsC/redeems`,
      {
        amount,
        bank,
      }
    );

    revalidatePath("/");
  } catch (error) {}
}
