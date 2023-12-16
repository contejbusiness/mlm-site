import { NextResponse } from "next/server";
import axios from "axios";

import { auth } from "@clerk/nextjs";

export async function POST(req: Request) {
  try {
    const { userId }: { userId: string | null } = auth();

    const { amount, bank } = await req.json();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    if (!amount) return new NextResponse("Amount is required", { status: 400 });
    if (!bank) return new NextResponse("Bank is required", { status: 400 });

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/usersv2/${userId}/redeems`,
      {
        amount,
        bank,
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("🚀 ~ file: route.ts:27 ~ POST ~ error:", error);
    return new NextResponse("Failed to redeem", { status: 500 });
  }
}
