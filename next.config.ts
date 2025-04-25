import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "3rsx8go52l.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
