import Billboard from "@/components/ui/billboard";
import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("42e9db94-9932-4a33-addf-af821207c9df");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
