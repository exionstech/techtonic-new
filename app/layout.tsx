import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastProvider } from "@/providers/toast-provider";
import { Providers } from "@/providers/provider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({ subsets: ["latin"], weight:["100","200","300","400","500","600","700","800","900"] });

export const metadata: Metadata = {
  title: "jobQuest",
  description: "Create your own onlinw job applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <Providers> 
      <body className={poppins.className}>
        <Navbar/>
        {children}
        <ToastProvider/>
      <div className='bg-gray-900 dark !scroll-smooth'> 
        <Footer/>
      </div>

      </body>
      </Providers>
    </html>
    </ClerkProvider>
  );
}
