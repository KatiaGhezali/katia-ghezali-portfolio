/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.devtool = "source-map";
    }

    return config;
  },
};
