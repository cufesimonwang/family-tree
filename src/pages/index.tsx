// src/pages/index.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@clerk/nextjs";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const { t } = useTranslation("common");

  useEffect(() => {
    if (isSignedIn) {
      router.replace("/dashboard");
    }
  }, [isSignedIn, router]);

  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-indigo-900/90" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/family-tree-bg.jpg')" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Language Switcher */}
        <div className="absolute top-4 right-4">
          <LanguageSwitcher />
        </div>

        {/* Main Card */}
        <div className="w-full max-w-2xl">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-white/20 rounded-full mb-4">
                <span className="text-5xl">🌳</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t("appTitle")}
              </h1>
              <p className="text-xl text-white/90 mb-8">{t("appSubtitle")}</p>
            </div>

            <div className="space-y-6">
              <Link
                href="/dashboard"
                className="block w-full text-center bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                {t("enter")}
              </Link>

              <Link
                href="/about"
                className="block w-full text-center text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
              >
                {t("learnMore")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
