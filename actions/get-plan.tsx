import { Plan } from "@/types";

const getPlan = async (id: string): Promise<Plan> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/plans/${id}`);
  return res.json();
};

export default getPlan;
