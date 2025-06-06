import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: {
  bodySizeLimit: '1mb',
  allowedOrigins: ['*'],
}
,
  },
};

export default nextConfig;
