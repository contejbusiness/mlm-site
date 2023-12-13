const URL = `${process.env.NEXT_PUBLIC_API_URL}/plans`;

const getPlans = async (): Promise<any[]> => {
  const res = await fetch(`${URL}`);
  return res.json();
};

export default getPlans;
