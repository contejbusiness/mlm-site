import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { Plan, User } from "@/types";
import TableList from "./table-list";

interface Props {
  plan: Plan;
  user: User;
}

const PlanRefferalPage: React.FC<Props> = ({ plan, user }) => {
  return (
    <Container>
      <div className="w-full h-screen flex p-4 flex-col">
        <h2 className="text-xl bold pb-8">Active Plan</h2>

        <div className="bg-white p-8 rounded shadow-md w-full md:max-w-[500px]">
          <table className="w-full ">
            <tbody>
              <tr className="border-b">
                <td className="py-2 pr-4 text-gray-500 font-medium">Plan</td>
                <td className="py-2 text-black">{plan.name}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4 text-gray-500 font-medium">Reward</td>
                <td className="py-2 text-black">{plan.reward}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4 text-gray-500 font-medium">
                  Total Referred
                </td>
                <td className="py-2 text-black">{user.referrals.length}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-gray-500 font-medium">
                  Referral Code
                </td>
                <td className="py-2 text-black">{user.myRefferalCode}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl bold py-12">Recent Referrals</h2>

        <TableList referrals={user.referrals} reward={plan.reward} />
      </div>
    </Container>
  );
};

export default PlanRefferalPage;
