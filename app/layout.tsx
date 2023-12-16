import Footer from "@/components/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
// import Navbar from "@/components/navbar";
import ToastProvider from "@/providers/toast-provider";
import ModalProvider from "@/providers/modal-provider";
import Navbar from "@/components/ui/v2/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import getCurrentUser from "@/actions/get-user";
import NavWrapper from "@/components/navwrapper";

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
  return (
    <ClerkProvider>
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
    </ClerkProvider>
  );
}
