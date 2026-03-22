import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["www.rophim.me"],
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
