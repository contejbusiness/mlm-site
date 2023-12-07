import Container from "@/components/ui/container";
import React from "react";
import TableList from "./components/table-list";

const RefferalPage = () => {
  return (
    <Container>
      <div className="py-4 px-2">
        <h2 className="scroll-m-20 border-b pb-2 text-md font-semibold tracking-tight first:mt-0">
          Refferals
        </h2>

        <TableList />
      </div>
    </Container>
  );
};

export default RefferalPage;
