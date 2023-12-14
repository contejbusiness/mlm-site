import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

import TableList from "./components/table-list";
import BalanceForm from "./components/balance-form";
import getCurrentUser from "@/actions/get-user";

const BalancePage = async () => {
  const user = await getCurrentUser();

  return (
    <Container>
      <div className="p-4">
        <div>
          <p>
            Scan the below QR to make payment <br />
            <strong className="text-red-500">
              Send Screenshot of your payment for approval
            </strong>
          </p>
          <Image
            src="https://cdn.dribbble.com/userupload/3108360/file/original-077339caa9e3b1972bedde17c4e6159e.jpg?resize=700x525&vertical=center"
            alt="QR Code"
            width={500}
            height={500}
          />
        </div>

        <Separator />

        <BalanceForm />

        <div className="p-4">
          {user.requests && user.requests.length > 0 ? (
            <TableList requests={user.requests} />
          ) : (
            <div className="min-h-[400px] flex items-center justify-center w-full">
              No Requests Made
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default BalancePage;
