import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

const pressKitDownloadUrl =
  "https://github.com/MomasVII/SkateMatesPressKit/releases/download/press-kit/PressKit.zip";
const shortsDownloadUrl =
  "https://github.com/MomasVII/SkateMatesPressKit/releases/download/shorts/Shorts.zip";
const trailerDownloadUrl =
  "https://github.com/MomasVII/SkateMatesPressKit/releases/download/trailer/Trailer.mp4";
const officialTrailerDownloadUrl =
  "https://github.com/MomasVII/SkateMatesPressKit/releases/download/official-trailer/OfficialSkateMatesTrailer.mp4";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  // Large zips are served from GitHub Releases (PressKit.zip exceeds Vercel's 1GB limit).
  // Keep the site paths as the public URLs via permanent redirects.
  async redirects() {
    return [
      {
        source: "/PressKit.zip",
        destination: pressKitDownloadUrl,
        permanent: true,
      },
      {
        source: "/Shorts.zip",
        destination: shortsDownloadUrl,
        permanent: true,
      },
      {
        source: "/shorts.zip",
        destination: shortsDownloadUrl,
        permanent: true,
      },
      {
        source: "/Trailer.mp4",
        destination: trailerDownloadUrl,
        permanent: true,
      },
      {
        source: "/trailer.mp4",
        destination: trailerDownloadUrl,
        permanent: true,
      },
      {
        source: "/OfficialSkateMatesTrailer.mp4",
        destination: officialTrailerDownloadUrl,
        permanent: true,
      },
      {
        source: "/officialskatematestrailer.mp4",
        destination: officialTrailerDownloadUrl,
        permanent: true,
      },
    ];
  },
  outputFileTracingExcludes: {
    "/*": ["./public/PressKit.zip", "./public/Shorts.zip"],
    "/api/*": ["./public/PressKit.zip", "./public/Shorts.zip"],
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
