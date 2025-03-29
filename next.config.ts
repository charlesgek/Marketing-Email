import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // ✅ Correct serverActions format (object instead of boolean)
    serverActions: {
      enabled: true,
      allowedOrigins: [], // Optional: Add trusted origins
    },
    optimizePackageImports: [
      '@dnd-kit/core',
      '@react-three/fiber',
    ],
    // typedRoutes: true, // Keep commented if using Turbopack
    turbo: {
      resolveAlias: {
        'three': require.resolve('three'), // Helps Three.js in Turbopack
      },
    },
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**', // Replace with your domains
      },
    ],
  },
};

export default nextConfig;