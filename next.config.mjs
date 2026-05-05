/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"
const basePath = isProd ? "/design-portfolio" : ""

const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

export default nextConfig
