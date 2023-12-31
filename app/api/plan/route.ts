import { NextResponse } from "next/server";
import axios from "axios";

import { revalidatePath } from "next/cache";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function POST(req: Request) {
  try {
    const { getUser } = getKindeServerSession();
    const userId = getUser().id;

    const { planId } = await req.json();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    if (!planId)
      return new NextResponse("Plan Id is required", { status: 400 });

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/plans/${planId}`,
      {
        userId,
      }
    );

    revalidatePath("/");

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("🚀 ~ file: route.ts:27 ~ POST ~ error:", error);
    return new NextResponse("Failed to redeem", { status: 500 });
  }
}
