import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

const pressKitDownloadUrl =
  "https://github.com/MomasVII/SkateMatesPressKit/releases/download/press-kit/PressKit.zip";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  // PressKit.zip exceeds Vercel's 1GB limit; served from GitHub Releases.
  // Keep /PressKit.zip as the public URL via permanent redirect.
  async redirects() {
    return [
      {
        source: "/PressKit.zip",
        destination: pressKitDownloadUrl,
        permanent: true,
      },
    ];
  },
  outputFileTracingExcludes: {
    "/*": ["./public/PressKit.zip"],
    "/api/*": ["./public/PressKit.zip"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withMDX(nextConfig);
