/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: "raw-loader",
          // Pass options to marked
          // See https://marked.js.org/using_advanced#options
        },
      ],
    })

    return config
  },
};

export default nextConfig;
