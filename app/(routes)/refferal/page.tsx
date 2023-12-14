import Container from "@/components/ui/container";
import React from "react";
import TableList from "./components/table-list";
import getCurrentUser from "@/actions/get-user";

const RefferalPage = async () => {
  const user = await getCurrentUser();

  return (
    <Container>
      <div className="py-4 px-2">
        <h2 className="scroll-m-20 border-b pb-2 text-md font-semibold tracking-tight first:mt-0">
          Refferals
        </h2>

        <div className="p-2">
          {user.referrals && user.referrals.length > 0 ? (
            <TableList referrals={user.referrals} />
          ) : (
            <div className="min-h-[400px] flex items-center justify-center w-full">
              No Referrals
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default RefferalPage;
