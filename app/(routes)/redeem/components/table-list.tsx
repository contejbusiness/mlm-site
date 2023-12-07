import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Currency from "@/components/ui/currency";

const TableList = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-gray-900 text-white">
          <TableHead className="text-white">Date</TableHead>
          <TableHead className="text-white">Amount</TableHead>

          <TableHead className="text-right text-white">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-gray-100">
        <TableRow>
          <TableCell className="font-medium">10-12-2023</TableCell>
          <TableCell>
            <Currency value={50} />
          </TableCell>
          <TableCell className="text-right">Pending</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableList;
