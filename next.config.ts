import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  outputFileTracingIncludes: {
    "/peptide-therapy/[slug]": ["./content/peptide-therapy/**"],
  },
};

export default nextConfig;
