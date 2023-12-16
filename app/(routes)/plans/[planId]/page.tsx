import getPlan from "@/actions/get-plan";
import getCurrentUser from "@/actions/get-user";
import Container from "@/components/ui/container";
import BuyPlan from "./components/buy-plan";

const Page = async ({ params }: { params: { planId: string } }) => {
  const plan = await getPlan(params.planId);

  const user = await getCurrentUser();

  if (user.balance < plan.price)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        You Dont Have Enough Balance to Buy this plan.
      </div>
    );

  return (
    <Container>
      <div className="min-h-[500px]">
        <BuyPlan plan={plan} user={user} />
      </div>
    </Container>
  );
};

export default Page;
