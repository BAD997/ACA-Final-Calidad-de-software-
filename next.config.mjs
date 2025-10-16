/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 Esta línea reemplaza a `next export`
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // 👈 Necesario para export estático si usas <Image />
  },
};

export default nextConfig;
