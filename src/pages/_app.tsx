import { UserProvider } from "@/contexts/User";
import Main from "@/layouts/main/Main";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Main>
        <Component {...pageProps} />
      </Main>
    </UserProvider>
  );
}
