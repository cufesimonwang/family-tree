"use client";
import { UserButton } from "@clerk/nextjs";

export default function UserMenu() {
  return (
    <div className="absolute top-4 right-4">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
