/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: { unoptimized: true },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'errendis.com' }],
        destination: 'https://www.errendis.com/:path*',
        permanent: true, // 301 — dit à Google que c'est définitif
      },
    ];
  },
};

export default nextConfig;