import { Scanner, User } from "@/types";

const getScanner = async (): Promise<Scanner> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/scanner`);

    console.log(`${process.env.NEXT_PUBLIC_API_URL}/scanner`);

    return res.json();
  } catch (error: any) {
    return error;
  }
};

export default getScanner;
