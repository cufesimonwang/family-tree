"use client";
import { useState } from "react";

export default function InviteForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleInvite = async () => {
    const url = `http://localhost:3000/sign-up?redirect_url=/dashboard`; 

    try {
      await fetch("/api/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, url }),
      });
      setStatus("Invite link sent!");
    } catch (err) {
      setStatus("Error sending invite.");
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Invite a Family Member</h2>
      <div className="flex gap-2">
        <input
          className="border rounded px-2 py-1"
          type="email"
          placeholder="user@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded"
          onClick={handleInvite}
        >
          Invite
        </button>
      </div>
      {status && <p className="text-sm mt-2">{status}</p>}
    </div>
  );
}
