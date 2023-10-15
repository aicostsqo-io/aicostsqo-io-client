import MainLayout from "@/layouts/main/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className=" flex items-center justify-center translate-y-full ">
        <div className="flex flex-col gap-10 items-center justify-center text-blue-500 text-2xl w-1/2 border-black border-2 py-20 px-10">
          <h1>Welcome to AI-COSTQO TEST MARBLE!</h1>
          <p>You don&#39;t have a project yet.</p>
          <p>You can start by creating a project.</p>
        </div>
      </div>
    </MainLayout>
  );
}
