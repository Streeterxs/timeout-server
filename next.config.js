/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
}

module.exports = nextConfig
