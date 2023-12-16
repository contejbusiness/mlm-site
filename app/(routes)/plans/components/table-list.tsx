import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Currency from "@/components/ui/currency";
import { User } from "@/types";

interface Props {
  referrals: User[];
  reward: number;
}

const TableList: React.FC<Props> = ({ referrals, reward }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-gray-900 text-white">
          <TableHead className="text-white">Name</TableHead>
          <TableHead className="text-white">Amount</TableHead>

          <TableHead className="text-right text-white">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-gray-100">
        {referrals.map((referral) => (
          <TableRow key={referral.id}>
            <TableCell className="font-medium">{referral.name}</TableCell>
            <TableCell>
              <Currency value={reward} />
            </TableCell>
            <TableCell className="text-right">
              {" "}
              {new Date(referral.createdAt).toLocaleDateString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableList;
