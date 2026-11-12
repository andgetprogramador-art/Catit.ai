import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  allowedDevOrigins: [
    "127.0.0.1",
    ...(process.env.REPLIT_DEV_DOMAIN
      ? [process.env.REPLIT_DEV_DOMAIN]
      : ["*.replit.dev"]),
  ],
};

export default nextConfig;
