import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import FamilyTree from "@/components/FamilyTree";

export default function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <main className="flex min-h-screen flex-col p-8">
      <h1 className="text-3xl font-bold mb-8">Family Tree Dashboard</h1>
      <div className="flex-1 border rounded-lg p-4">
        <FamilyTree />
      </div>
    </main>
  );
}
