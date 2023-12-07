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
      <TableCaption>A list of your recent transactions.</TableCaption>
      <TableHeader>
        <TableRow className="bg-gray-900 text-white">
          <TableHead className="text-white">Amount</TableHead>
          <TableHead className="text-white">Date</TableHead>
          <TableHead className="text-white">Screenshot</TableHead>
          <TableHead className="text-right text-white">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-gray-100">
        <TableRow>
          <TableCell className="font-medium">
            <Currency value={1000} />
          </TableCell>
          <TableCell>20-DEC-2023</TableCell>
          <TableCell>View</TableCell>
          <TableCell className="text-right">PENDING</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableList;
