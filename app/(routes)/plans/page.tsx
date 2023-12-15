import Container from "@/components/ui/container";
import PlanCard from "./components/plan-card";
import getPlans from "@/actions/get-plans";
import getCurrentUser from "@/actions/get-user";
import PlanRefferalPage from "./components/plan-reffer";

const PlanPage = async () => {
  const plans = await getPlans();

  const user = await getCurrentUser();

  if (user.plan != null) {
    return <PlanRefferalPage plan={user.plan} user={user}/>;
  }

  return (
    <Container>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-90">
              Designed for business teams like yours
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl">
              With Premium Plans unlock great benefits on product purchases!
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {plans.map((plan, index) => (
              <PlanCard
                id={plan.id}
                name={plan.name}
                price={plan.price}
                reward={plan.reward}
                index={index}
                key={plan.id}
              />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default PlanPage;
