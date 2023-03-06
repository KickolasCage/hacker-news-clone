import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Error from "@/components/Error";

import "@/styles/globals.css";
import styles from "@/styles/Home.module.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-[750px] mx-auto">
      <Navigation />
      <div className="bg-white rounded-md py-5">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
