import Footer from "@/components/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
// import Navbar from "@/components/navbar";
import ToastProvider from "@/providers/toast-provider";
import ModalProvider from "@/providers/modal-provider";
import NavWrapper from "@/components/navwrapper";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Ecommerce Store by Contej",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = getKindeServerSession();

  if (!isAuthenticated()) {
    redirect("/api/auth/login");
  }

  return (
    // <ClerkProvider>
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        {/* <Navbar /> */}
        <NavWrapper />
        {children}
        <Footer />;
      </body>
    </html>
    // </ClerkProvider>
  );
}
