"use client";
import { useState } from "react";
import { useTranslation } from "next-i18next";

export default function InviteForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const { t } = useTranslation("common");

  const handleInvite = async () => {
    const url = `http://localhost:3000/sign-up?redirect_url=/dashboard`;

    try {
      await fetch("/api/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, url }),
      });
      setStatus(t("inviteSent"));
    } catch (err) {
      setStatus(t("inviteError"));
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">{t("inviteMember")}</h2>
      <div className="flex gap-2">
        <input
          className="border rounded px-2 py-1"
          type="email"
          placeholder={t("emailPlaceholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded"
          onClick={handleInvite}
        >
          {t("invite")}
        </button>
      </div>
      {status && <p className="text-sm mt-2">{status}</p>}
    </div>
  );
}
