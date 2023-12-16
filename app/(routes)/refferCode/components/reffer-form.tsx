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
import { Separator } from "@/components/ui/separator";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/v2/button";
import { startTransition, useState, useTransition } from "react";
import { createNewRedeem } from "@/app/_actions";
import axios from "axios";

type RefferRequest = z.infer<typeof formSchema>;

const formSchema = z.object({
  code: z.string().min(4),
});

const RefferForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [isPending, startTransition] = useTransition();

  const form = useForm<RefferRequest>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = async (data: RefferRequest) => {
    try {
      setLoading(true);

      await axios.post("/api/reffercode", {
        code: 12345,
      });
      router.push("/");
      toast.success("Reffer Code Applied");
    } catch (error: any) {
      console.log(
        "🚀 ~ file: redeem-form.tsx:51 ~ onSubmit ~ error:",
        error.response.statusText
      );
      toast.error("Invalid Referral Code");
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return <p className="pending">Wait.....</p>;
  }

  return (
    <Container>
      <div className="flex flex-col gap-8 p-4 min-h-[500px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            // action={createRedeemRequest}
            className="space-y-8 w-full"
          >
            <div className="md:grid md:grid-cols-3 gap-8">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Referral Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Referral Code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="ml-auto" type="submit" disabled={loading}>
              Submit
            </Button>
          </form>
        </Form>

        <Button className="bg-red-500">No I don't have a Referral Code</Button>
      </div>
    </Container>
  );
};

export default RefferForm;
