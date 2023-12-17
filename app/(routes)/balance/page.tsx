import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

import TableList from "./components/table-list";

import getCurrentUser from "@/actions/get-user";

import getScanner from "@/actions/get-scanner";
import { BillboardFormNew } from "@/components/ui/v2/newbalance-form";
// import BalanceForm from "./components/balance-form";

const BalancePage = async () => {
  const user = await getCurrentUser();

  const scanner = await getScanner();

  if (!scanner) {
    return (
      <div className="min-h-[80vh] flex items-center">
        <p className="w-full text-center underline text-3xl">
          No Scanner Found
        </p>
      </div>
    );
  }

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

        {/* <BalanceForm /> */}
        <BillboardFormNew />

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
