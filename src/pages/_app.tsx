import type { AppProps } from "next/app";

import "@/styles/globals.css";
import Cursor from "@/component/home/cursor";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="cursor-none">
     <Cursor/>
      <Component {...pageProps} />
    </main>
  );
}