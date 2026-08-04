import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  // PressKit.zip is served as a static asset; NFT over-traces process.cwd()
  // usage in getPosts() and would otherwise pack the ~1.2GB zip into functions.
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
