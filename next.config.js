/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {  // Sir Zia GitHub Repository  "learn-nextjs/step09_headless_cms/contentful/step02_complex/next.config.js"
    CONTENTFUL_SPACE_ID: "0ncua1h0bank",
    CONTENTFUL_ACCESS_KEY: "enTQgqEc5O1QhbFVrgVQei7G1I2ddSEW_FdXtvxwvRY"
  },
  images: {  // Sir Zia GitHub Repository
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',       
      },
    ],
  },
}

module.exports = nextConfig
