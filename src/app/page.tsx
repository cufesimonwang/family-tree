import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const { userId } = auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Digital Family Tree
        </h1>
        <p className="text-xl mb-8 text-center">
          Create, manage, and share your family history digitally
        </p>
        {userId ? (
          <div className="text-center">
            <Link
              href="/dashboard"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Go to Dashboard
            </Link>
          </div>
        ) : (
          <div className="text-center">
            <Link
              href="/sign-in"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
