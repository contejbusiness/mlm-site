"use client";

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

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/v2/button";
import Image from "next/image";

type BillboardFormValues = z.infer<typeof formSchema>;

const formSchema = z.object({
  amount: z.string().min(1),
  imageUrl: z.string().min(1),
});

const BalanceForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<BillboardFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      imageUrl: "",
    },
  });

  const onSubmit = async (data: BillboardFormValues) => {
    try {
      setLoading(true);

      await axios.post(`/api/balance`, data);

      router.refresh();
      toast.success("Screenshot uploaded");
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Payment Screenshot</FormLabel>
              <FormControl>
                <ImageUpload
                  value={field.value ? [field.value] : []}
                  disabled={loading}
                  onChange={(url) => field.onChange(url)}
                  onRemove={() => field.onChange("")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-end gap-4 pb-10">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Enter Payment Amount"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={loading} className="" type="submit">
            Send
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default BalanceForm;
