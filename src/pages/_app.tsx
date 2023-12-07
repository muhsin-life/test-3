import Layout from "../components/layout";
import { Inter } from "next/font/google";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { cn } from "@/lib/utils";
import { constructMetadata } from "@/components/utils/utils";

const inter = Inter({ subsets: ["latin"]});


export const metadata = constructMetadata()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cn("relative h-full  antialiased", inter.className)}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
