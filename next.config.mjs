/** @type {import('next').NextConfig} */
const nextConfig = {
  // Site 100% statique : chaque page est du HTML pur pré-généré → SEO maximal
  output: 'export',
  trailingSlash: false,
  images: { unoptimized: true },
};

export default nextConfig;
