import { Plan } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/plans`;

const getPlans = async (): Promise<Plan[]> => {
  const res = await fetch(`${URL}`, { next: { revalidate: 60 } });

  return res.json();
};

export default getPlans;
