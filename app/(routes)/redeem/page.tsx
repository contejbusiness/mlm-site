"use client";
import Container from "@/components/ui/container";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/v2/button";
import Table from "./components/table-list";
import useUser from "@/hooks/use-profile";

type BillboardFormValues = z.infer<typeof formSchema>;

const formSchema = z.object({
  amount: z.string().min(1),
});

const RedeemPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<BillboardFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
    },
  });

  const onSubmit = async (data: BillboardFormValues) => {
    try {
      setLoading(true);

      await axios.post(`/api/scanner`, data);

      router.refresh();
      router.push(`/balance`);
      toast.success("Screenshot uploaded");
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const { user } = useUser();

  return (
    <Container>
      <div className="h-screen flex flex-col gap-8 p-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
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
                      <Input
                        disabled={loading}
                        placeholder="Enter Redeem Amount"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button disabled={loading} className="ml-auto" type="submit">
              Send Request
            </Button>
          </form>
        </Form>

        <Separator />

        <div>
          <h2 className="scroll-m-20 border-b pb-2 text-md font-semibold tracking-tight first:mt-0">
            Previous Redeems
          </h2>

          {user && <div>{user?.id}</div>}
        </div>
      </div>
    </Container>
  );
};

export default RedeemPage;
