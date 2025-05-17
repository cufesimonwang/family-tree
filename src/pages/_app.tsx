// src/pages/_app.tsx
import { ClerkProvider } from "@clerk/nextjs";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

const publicPages = ["/", "/about"];

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const isPublicPage = publicPages.includes(pathname);

  return (
    <ClerkProvider>
      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        // Protect all other pages (like /dashboard)
        <Component {...pageProps} />
      )}
    </ClerkProvider>
  );
}

export default MyApp;
