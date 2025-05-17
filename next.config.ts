import type { NextConfig } from "next";
import nextConfigBase from "./next-i18next.config";

const nextConfig = {
  ...nextConfigBase,
  reactStrictMode: true,
};

export default nextConfig;
