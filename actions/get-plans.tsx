import { Plan } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/plans`;

const getPlans = async (): Promise<any[]> => {
  const res = await fetch(`${URL}`);

  console.log("🚀 ~ file: get-plans.tsx:8 ~ getPlans ~ res:", res)
  return res.json();
};

export default getPlans;
