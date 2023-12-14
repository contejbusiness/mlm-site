import getCurrentUser from "@/actions/get-user";
import Container from "@/components/ui/container";
import RedeemForm from "./components/redeem-form";
import TableList from "./components/table-list";
import { Separator } from "@/components/ui/separator";

const RedeemsPage = async () => {
  const user = await getCurrentUser();

  return (
    <Container>
      <RedeemForm />

      <Separator />

      <div className="p-2">
        {user.redeems && user.redeems.length > 0 ? (
          <TableList redeems={user.redeems} />
        ) : (
          <div>No Redeems</div>
        )}
      </div>
    </Container>
  );
};

export default RedeemsPage;
