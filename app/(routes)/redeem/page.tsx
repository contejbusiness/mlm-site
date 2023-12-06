"use client";
import Container from "@/components/ui/container";
import React from "react";
import { useRouter } from "next/navigation";

import ImageUpload from "@/components/ui/image-upload";
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
import Image from "next/image";
import Table from "./components/table-list";
import Currency from "@/components/ui/currency";

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
          <p className="my-4">Refferals</p>
          <Table />

          <p className="flex items-center my-5">Total Earning : {<Currency value={0} />}</p>
        </div>
      </div>
    </Container>
  );
};

export default RedeemPage;
