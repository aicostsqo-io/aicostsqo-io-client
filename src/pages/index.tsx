import MainLayout from "@/layouts/main/MainLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <MainLayout>
      <div className=" flex items-center justify-center translate-y-full ">
        <div className="flex flex-col gap-10 items-center justify-center text-blue-500 text-2xl w-1/2 border-black border-2 py-20 px-10">
          <h1>Welcome to AI-COSTQO TEST MARBLE!</h1>
          <p>You don't have a project yet.</p>
          <p>You can start by creating a project.</p>
        </div>
      </div>
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
    </MainLayout>
  );
}
