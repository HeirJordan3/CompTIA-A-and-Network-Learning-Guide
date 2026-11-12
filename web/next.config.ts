import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Keep file tracing rooted at web/ even when a parent lockfile exists.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
