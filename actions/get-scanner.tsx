import { Scanner, User } from "@/types";

const getScanner = async (): Promise<Scanner> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/scanner`);

    console.log("🚀 ~ file: get-scanner.tsx:7 ~ getScanner ~ res:", res);
    return res.json();
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getScanner;
