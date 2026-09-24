import type { NextConfig } from "next";
import path from "path";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  devIndicators: false,
  turbopack: {
    root: path.join(__dirname),
  },
  // Allow accessing dev server via LAN IP (e.g. http://192.168.x.x:3000)
  allowedDevOrigins: ["192.168.1.8", "192.168.3.84", "192.168.1.20"],
};

export default withNextIntl(nextConfig);
