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
  const refferals = [
    {
      name: "Aman Kumar",
      plan: "",
      earnings: 0,
    },
    {
      name: "Vijay Singh",
      plan: "abc",
      earnings: 50,
    },
    {
      name: "Aman Kumar",
      plan: "",
      earnings: 0,
    },
    {
      name: "Aman Kumar",
      plan: "abc",
      earnings: 50,
    },
    {
      name: "Aman Kumar",
      plan: "abc",
      earnings: 50,
    },
  ];

  return (
    <Table>
      <TableCaption className="">
        Total Earnings {<Currency value={150} />}
      </TableCaption>
      <TableHeader>
        <TableRow className="bg-gray-900 text-white">
          <TableHead className="text-white">Name</TableHead>
          <TableHead className="text-white">Plan</TableHead>
          <TableHead className="text-right text-white">Reward</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-gray-100">
        {refferals.map((refferal, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{refferal.name}</TableCell>
            <TableCell>
              {refferal.plan.length > 0 && (
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              )}
            </TableCell>
            <TableCell className="text-right">
              <Currency value={refferal.earnings} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableList;
