import { SiteProvider } from "@/contexts/Site";
import { UserProvider } from "@/contexts/User";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider>
        <SiteProvider>
          <Component {...pageProps} />
        </SiteProvider>
      </UserProvider>
    </>
  );
}
