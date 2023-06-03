import { SiteProvider } from "@/contexts/Site";
import { TreeProvider } from "@/contexts/Tree";
import { UserProvider } from "@/contexts/User";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
