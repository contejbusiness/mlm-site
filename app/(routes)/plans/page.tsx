import Container from "@/components/ui/container";
import PlanCard from "./components/plan-card";

const PlanPage = () => {
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
            <PlanCard name={"Level 1"} price={"1000"} reward={"50"} index={1} />
            <PlanCard
              name={"Level 2"}
              price={"2000"}
              reward={"100"}
              index={2}
            />
            <PlanCard
              name={"Level 3"}
              price={"3000"}
              reward={"200"}
              index={3}
            />
            <PlanCard
              name={"Level 4"}
              price={"5000"}
              reward={"300"}
              index={4}
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default PlanPage;
