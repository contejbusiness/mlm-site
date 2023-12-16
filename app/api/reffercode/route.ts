import { NextResponse } from "next/server";
import axios from "axios";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  try {
    const { userId }: { userId: string | null } = auth();

    const { code } = await req.json();

    if (!userId)
      return NextResponse.json({ error: "UserId is Missing" }, { status: 400 });

    if (!code)
      return NextResponse.json({ error: "Code is Required" }, { status: 400 });

    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/usersv2/${userId}`,
      {
        refferalCode: code,
      }
    );

    revalidatePath("/");

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("🚀 ~ file: route.ts:27 ~ POST ~ error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
