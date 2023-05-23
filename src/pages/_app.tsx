import { SiteProvider } from "@/contexts/Site";
import { TreeProvider } from "@/contexts/Tree";
import { UserProvider } from "@/contexts/User";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider>
        <SiteProvider>
          <TreeProvider>
            <Component {...pageProps} />
          </TreeProvider>
        </SiteProvider>
      </UserProvider>
    </>
  );
}
