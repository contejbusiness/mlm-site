import { NextResponse } from "next/server";
import axios from "axios";

import { revalidatePath } from "next/cache";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function POST(req: Request) {
  try {
    // const { userId }: { userId: string | null } = auth();
    const { getUser } = getKindeServerSession();
    const userId = getUser().id;

    const { code, phone } = await req.json();

    if (!userId)
      return NextResponse.json({ error: "UserId is Missing" }, { status: 400 });

    if (!phone)
      return NextResponse.json({ error: "Name is Required" }, { status: 400 });

    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/usersv2/${userId}`,
      {
        refferalCode: code,
        phone: phone,
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
