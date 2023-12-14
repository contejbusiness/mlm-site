import getCurrentUser from "@/actions/get-user";
import Container from "@/components/ui/container";
import RedeemForm from "./components/redeem-form";
import axios from "axios";

const RedeemsPage = async () => {
  const user = await getCurrentUser();

  return (
    <Container>
      <div>{user.id}</div>

      {user.redeems && user.redeems.length > 0 ? (
        <div>{user.redeems.length}</div>
      ) : (
        <div>No Redeems</div>
      )}

      <RedeemForm />
    </Container>
  );
};

export default RedeemsPage;
