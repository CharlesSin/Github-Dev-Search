import "./styles/globals.css";
import { Roboto_Mono } from "next/font/google";

import Navbar from "@/components/Navbar";
import Meta from "@/components/meta/Meta";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="">
      <head>
        <Meta />
      </head>
      <body className={robotoMono.className}>
        <div className="grid min-h-screen justify-center bg-light-bg p-10 px-4 text-blue dark:bg-dark-bg dark:text-white">
          <div className="sm:w-[500px] md:w-[600px] lg:w-[700px]">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
