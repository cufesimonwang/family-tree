import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const switchLanguage = (locale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale });
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => switchLanguage("en")}
        className={`px-2 py-1 rounded ${
          router.locale === "en" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage("zh")}
        className={`px-2 py-1 rounded ${
          router.locale === "zh" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        中文
      </button>
    </div>
  );
}
