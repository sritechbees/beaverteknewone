import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">


      <Head>
        {/* Favicon */}
        <link rel="icon" href="/home/Logo option-2.png" type="Beavertek" className="w-32 h-28" />
        <title>BeaverTek</title>
      </Head>

      
      
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
