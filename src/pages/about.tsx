// src/pages/about.tsx
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header with Logo */}
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-4">
              <span className="text-4xl">🌳</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {t("aboutTitle")}
            </h1>
            <p className="text-xl text-gray-600">{t("aboutSubtitle")}</p>
          </div>

          {/* Main Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/family-tree-illustration.svg"
                    alt="Family Tree Illustration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {t("aboutFeature1Title")}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {t("aboutFeature1Desc")}
                </p>
                <h2 className="text-2xl font-semibold text-gray-800">
                  {t("aboutFeature2Title")}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {t("aboutFeature2Desc")}
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-semibold mb-2">
                {t("feature1Title")}
              </h3>
              <p className="text-gray-600">{t("feature1Desc")}</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">
                {t("feature2Title")}
              </h3>
              <p className="text-gray-600">{t("feature2Desc")}</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">
                {t("feature3Title")}
              </h3>
              <p className="text-gray-600">{t("feature3Desc")}</p>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              <span className="mr-2">←</span>
              {t("backToHome")}
            </Link>
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
