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
          <div className="min-h-[400px] flex items-center justify-center w-full">
            No Referrals
          </div>
        )}
      </div>
    </Container>
  );
};

export default RedeemsPage;
