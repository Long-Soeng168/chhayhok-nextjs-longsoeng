import localFont from "next/font/local";
import "./globals.css";
import { Roboto } from "next/font/google";

import MyFooter from "@/components/my-footer";
import { Suspense } from "react";
import MyLoadingAnimation from "@/components/my-loading-animation";
import HomeHeader from "./components/home-header";
import MyFloatTelegram from "@/components/my-float-telegram";
import { BottomMobileNav } from "@/components/bottom-mobile-nav";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }) {
  // const res = await fetch(`${BASE_API_URL}/categories`);
  // const resultCate = await res.json();
  // console.log(resultCate);

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Script */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T77BPR3R');
        `}
        </Script>

        {/* Your main component */}
      </head>
      <body
        className={` ${roboto.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T77BPR3R"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        
        <MyFloatTelegram />
        <HomeHeader />

        {/*End Slider */}
        <Suspense fallback={<MyLoadingAnimation />}>
          <div className="min-h-[70vh]">{children}</div>
        </Suspense>

        {/* Footer */}

        <MyFooter />
        <Suspense fallback={<MyLoadingAnimation />}>
          <BottomMobileNav />
        </Suspense>

        {/*End Footer */}
      </body>
    </html>
  );
}
