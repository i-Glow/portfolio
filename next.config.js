/** @type {import('next').NextConfig} */

const dev = process.env.NEXT_PUBLIC_DEV === "DEV";

const nextConfig = dev
  ? {}
  : {
      output: "export",
      basePath: "/portfolio",
    };

module.exports = nextConfig;
