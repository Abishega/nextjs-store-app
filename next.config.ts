import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["*"], // Allow all domains (Not recommended for production)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  i18n: {
    locales: ["en", "ar"], // Supported languages
    defaultLocale: "en", // Default language
  },
  
};

export default nextConfig;
