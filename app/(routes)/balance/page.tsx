import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

import TableList from "./components/table-list";
import BalanceForm from "./components/balance-form";
import getCurrentUser from "@/actions/get-user";

import getScanner from "@/actions/get-scanner";

const BalancePage = async () => {
  const user = await getCurrentUser();

  const scanner = await getScanner();
  console.log("🚀 ~ file: page.tsx:15 ~ BalancePage ~ scanner:", scanner);

  return (
    <Container>
      <div className="p-4">
        <div>
          <p>
            Scan the below QR to make payment <br />
            <strong className="text-red-500">
              Send Screenshot of your payment for approval -{" "}
              <b>
                Make Sure to Share a Correct Screenshot, Wrong Screenshot or
                Amount can lead to Request Cancelation
              </b>
            </strong>
          </p>
          <Image
            src={scanner.imageUrl}
            alt="QR Code"
            width={400}
            height={400}
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
