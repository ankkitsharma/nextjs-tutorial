/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.thecocktaildb.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        "friendly-spoon-7x5xxq9r76whpjq9-3001.app.github.dev",
        "localhost:3001",
      ],
    },
  },
};

export default nextConfig;
