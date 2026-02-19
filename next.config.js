/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use SWC transform for styled-components (replaces Babel plugin)
  compiler: { styledComponents: true },
  // Static export compatibility (you use next export / static hosting)
  output: 'export',
  images: { unoptimized: true },
};

module.exports = nextConfig;

