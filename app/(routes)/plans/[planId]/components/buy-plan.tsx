"use client";

import { Button } from "@/components/ui/v2/button";
import { Plan, User } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  plan: Plan;
  user: User;
}

const BuyPlan: React.FC<Props> = ({ plan, user }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    try {
      setLoading(true);

      await axios.post("/api/plan", {
        planId: plan.id,
      });

      router.refresh();
      router.push(`/redeems`);
      toast.success("Request for Redeem Sent");
    } catch (error: any) {
      console.log("🚀 ~ file: redeem-form.tsx:51 ~ onSubmit ~ error:", error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Button onClick={onSubmit} disabled={loading}>
        Buy Now
      </Button>
    </div>
  );
};

export default BuyPlan;
