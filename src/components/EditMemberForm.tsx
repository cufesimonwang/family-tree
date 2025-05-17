"use client";
import { useState } from "react";

export default function EditMemberForm() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    setStatus(""); // reset status

    if (!name || !birthDate) {
      setStatus("⚠️ Please fill in both name and birth date.");
      return;
    }

    try {
      const response = await fetch("/api/members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          birthDate,
        }),
      });

      if (!response.ok) throw new Error("Failed to add member");

      const data = await response.json();
      setStatus(`✅ Added ${data.name} successfully!`);
      setName("");
      setBirthDate("");
    } catch (error) {
      setStatus("❌ Error adding member. Please try again.");
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Add or Edit Member</h2>
      <div className="flex flex-col gap-2">
        <input
          className="border rounded px-2 py-1"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border rounded px-2 py-1"
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <button
          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
          onClick={handleSubmit}
        >
          Save Member
        </button>
        {status && <p className="text-sm text-gray-700 mt-1">{status}</p>}
      </div>
    </div>
  );
}
