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
import { RequestBalance } from "@/types";

import { useEffect, useState } from "react";

interface Props {
  requests: RequestBalance[];
}

const TableList: React.FC<Props> = ({ requests }) => {
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
        {requests.map((request) => (
          <TableRow key={request.id}>
            <TableCell className="font-medium">
              {new Date(request.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell>
              <Currency value={request.amount} />
            </TableCell>
            <TableCell className="text-right">{request.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableList;
