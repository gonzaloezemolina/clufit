import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@clufit/ui", "@clufit/types", "@clufit/config", "@clufit/utils", "@clufit/api"],
};

export default nextConfig;
