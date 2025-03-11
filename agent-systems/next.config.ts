import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ESLint beim Build-Prozess deaktivieren
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
