"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Currency from "@/components/ui/currency";
import { Redeem, User } from "@/types";

import { useEffect, useState } from "react";

interface Props {
  redeems: Redeem[];
}

const TableList: React.FC<Props> = ({ redeems }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

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
        {redeems.map((redeem) => (
          <TableRow key={redeem.id}>
            <TableCell className="font-medium">
              {new Date(redeem.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell>
              <Currency value={redeem.amount} />
            </TableCell>
            <TableCell className="text-right">{redeem.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableList;
