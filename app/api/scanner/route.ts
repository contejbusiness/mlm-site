import { NextResponse } from "next/server";
import axios from "axios";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET(req: Request) {
  try {
    const { getUser } = getKindeServerSession();
    const userId = getUser().id;

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/scanner`
    );
    console.log("🚀 ~ file: route.ts:15 ~ GET ~ response:", response);

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("🚀 ~ file: route.ts:27 ~ GET ~ error:", error);
    return new NextResponse("Scanner not found", { status: 500 });
  }
}
