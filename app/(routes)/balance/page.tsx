"use client";
import Container from "@/components/ui/container";
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

type BillboardFormValues = z.infer<typeof formSchema>;

const formSchema = z.object({
  label: z.string().min(1),
  imageUrl: z.string().min(1),
});

const BalancePage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<BillboardFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      label: "",
      imageUrl: "",
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
      <div className="p-4">
        <div>
          <p>
            Scan the below QR to make payment <br />{" "}
            <strong className="text-red-500">
              Send Screenshot of your payment for approval
            </strong>
          </p>
          <Image
            src="https://cdn.dribbble.com/userupload/3108360/file/original-077339caa9e3b1972bedde17c4e6159e.jpg?resize=700x525&vertical=center"
            alt="QR Code"
            width={500}
            height={500}
          />
        </div>

        <Separator />

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
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
            <div className="md:grid md:grid-cols-3 gap-8">
              <FormField
                control={form.control}
                name="label"
                render={({ field }) => (
                  <FormItem>
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
            </div>
            <Button disabled={loading} className="ml-auto" type="submit">
              Send
            </Button>
          </form>
        </Form>
      </div>
    </Container>
  );
};

export default BalancePage;
