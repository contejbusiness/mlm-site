"use client";
import Container from "@/components/ui/container";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/v2/button";
import axios from "axios";
import { useState } from "react";
import { AlertModal } from "@/components/modals/alert-modal";

type RedeemRequest = z.infer<typeof formSchema>;

const formSchema = z.object({
  amount: z.string().min(1),
  bank: z.string().min(4),
});

const RedeemForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm<RedeemRequest>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      bank: "",
    },
  });

  const onSubmit = async (data: RedeemRequest) => {
    try {
      setLoading(true);

      await axios.post("/api/redeem", {
        amount: data.amount,
        bank: data.bank,
      });
      router.refresh();
      router.push(`/redeems`);
      toast.success("Request for Redeem Sent");
    } catch (error: any) {
      console.log("🚀 ~ file: redeem-form.tsx:51 ~ onSubmit ~ error:", error);
      router.refresh();
      router.push(`/redeems`);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      {/* <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onSubmit}
        loading={loading}
      /> */}
      <div className="flex flex-col gap-8 p-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            // action={createRedeemRequest}
            className="space-y-8 w-full"
          >
            <div className="md:grid md:grid-cols-3 gap-8">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Redeem Amount" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bank"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bank UPI/Wallet</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter UPI ID" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="ml-auto" type="submit" disabled={loading}>
              Send Request
            </Button>
          </form>
        </Form>
      </div>
    </Container>
  );
};

export default RedeemForm;
