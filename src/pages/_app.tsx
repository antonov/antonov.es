import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { Asap_Condensed } from 'next/font/google';

import { api } from "~/utils/api";

import "~/styles/globals.css";
const asap_condensed = Asap_Condensed({
  subsets: ['latin'], weight: ["400", "700"], 
});
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {


  return (
    <>
    <style jsx global>
    {`
      :root {
        --asap_condensed-font: ${asap_condensed.style.fontFamily};
      }
    `}
    </style>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    
    </>
  );
};

export default api.withTRPC(MyApp);
