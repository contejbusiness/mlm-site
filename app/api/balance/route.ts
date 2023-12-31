import { NextResponse } from "next/server";
import axios from "axios";

import { revalidatePath } from "next/cache";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function POST(req: Request) {
  try {
    const { getUser } = getKindeServerSession();
    const userId = getUser().id;

    const { amount, imageUrl } = await req.json();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    if (!amount) return new NextResponse("Amount is required", { status: 400 });
    if (!imageUrl)
      return new NextResponse("Image is required", { status: 400 });

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/requests/${userId}`,
      {
        amount: Number(amount),
        imageUrl,
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("🚀 ~ file: route.ts:27 ~ POST ~ error:", error);
    return new NextResponse("Failed to redeem", { status: 500 });
  }
}
