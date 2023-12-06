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
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow className="bg-gray-900 text-white">
          <TableHead className="text-white">Name</TableHead>
          <TableHead className="text-white">Plan</TableHead>
          <TableHead className="text-white">Purchased Plan</TableHead>
          <TableHead className="text-right text-white">Reward</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-gray-100">
        <TableRow>
          <TableCell className="font-medium">Aman Kumar</TableCell>
          <TableCell>Level 1</TableCell>
          <TableCell>No</TableCell>
          <TableCell className="text-right">
            <Currency value={0} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableList;
