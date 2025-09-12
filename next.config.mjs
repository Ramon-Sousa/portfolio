/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_VALID_KEYS: process.env.NEXT_PUBLIC_VALID_KEYS,
    NOTION_API_KEY: process.env.NOTION_API_KEY,
    DATABASE_URL: process.env.DATABASE_URL,
  },
  // Configuration for Netlify deployment
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable static optimization for dynamic routes
  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;
