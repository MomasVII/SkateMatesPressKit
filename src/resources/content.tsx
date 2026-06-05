import Image from "next/image";
import { Blog, Gallery, Home, Newsletter, Person, Social } from "@/types";

const person: Person = {
  firstName: "Momas",
  lastName: "",
  name: "Momas",
  role: "Co-op skate obstacle course · Steam",
  avatar: "/images/SkateMates.png",
  email: "momasgamedev@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Get Skate Mates news in your inbox</>,
  description: <>Updates on the co-op skate obstacle course game, dev logs, and launch news</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to highlight
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/momasgamedev/",
    essential: false,
  },
  {
    name: "YouTube",
    icon: "youtube",
    link: "https://www.youtube.com/@momasgamedev",
    essential: false,
  },
  {
    name: "Steam",
    icon: "steam",
    link: "https://store.steampowered.com/app/4549600/Skate_Mates/",
    essential: false,
  },
  {
    name: "Discord",
    icon: "discord",
    link: "https://discord.gg/aSJ9wwHa",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Skate Mates",
  description:
    "Skate Mates is a chaotic co-op obstacle course on Steam. You control one skate, your mate controls the other—only teamwork and communication will get you through the course.",
  headline: (
    <Image
      src="/images/SkateMates.png"
      alt="Skate Mates"
      width={712}
      height={136}
      priority
      style={{ width: "auto", maxWidth: "100%", height: "200px" }}
    />
  ),
  featured: {
    display: true,
    title: "Wishlist on Steam today!",
    href: "https://store.steampowered.com/app/4549600/Skate_Mates/",
  },
  subline: (
    <>
      Team up with a mate on a brutal obstacle course. You steer the left skate, they steer the
      right—crashes, spikes, and rage quits included.
    </>
  ),
  galleryBlogText: {
    display: true,
    title: <>We&apos;re Gonna Skate To One Song and One Song Only....</>,
    bullets: [
      "Single Play & Co-Op.",
      "Play solo and master the course.",
      "Grab a friend and relinquish all control of the right skate.",
      "Customize Your Skater Gear.",
      "Put on a silly hat, because you need to look your best when you face plant.",
      "Various Courses with Unique Challenges.",
      "Too hard? Too easy? Tune the difficulty settings to your liking.",
      "Local Single Keyboard co-op. WASD or Up, Down, Left, Right.",
      "Don't hate the game, hate the player. Rage quitting is to be expected.",
      "Travel from the heat of the desert to the cold snap of the ice caps. There's heaps to explore throughout.",
      "Break the records and post your highscore. There's something in it if you get through unscathed.",
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "News",
  title: "Skate Mates Latest News",
  description:
    "Dev updates, trailers, and announcements for Skate Mates—the co-op skate obstacle course coming to Steam.",
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Screenshots",
  title: "Skate Mates – Screenshots",
  description:
    "Screenshots and art from Skate Mates, the co-op skate obstacle course game on Steam.",
  images: [
    { src: "/images/gallery/Desert1.jpg", alt: "Skate Mates desert biome", orientation: "horizontal" },
    { src: "/images/gallery/Grass1.jpg", alt: "Skate Mates grass biome", orientation: "horizontal" },
    { src: "/images/gallery/Lava1.jpg", alt: "Skate Mates lava biome", orientation: "horizontal" },
    { src: "/images/gallery/DesertDeath.jpg", alt: "Skate Mates desert gameplay", orientation: "horizontal" },
    { src: "/images/gallery/Grass2.jpg", alt: "Skate Mates grass level", orientation: "horizontal" },
    { src: "/images/gallery/1.jpg", alt: "Skate Mates screenshot", orientation: "horizontal" },
    { src: "/images/gallery/3.jpg", alt: "Skate Mates screenshot", orientation: "horizontal" },
    { src: "/images/gallery/4.jpg", alt: "Skate Mates screenshot", orientation: "horizontal" },
    { src: "/images/gallery/5.jpg", alt: "Skate Mates screenshot", orientation: "horizontal" },
    { src: "/images/gallery/6.jpg", alt: "Skate Mates screenshot", orientation: "horizontal" },
    { src: "/images/gallery/7.jpg", alt: "Skate Mates screenshot", orientation: "horizontal" },
    { src: "/images/gallery/8.jpg", alt: "Skate Mates screenshot", orientation: "horizontal" },
    { src: "/images/gallery/9.jpg", alt: "Skate Mates screenshot", orientation: "horizontal" },
    { src: "/images/gallery/10.jpg", alt: "Skate Mates screenshot", orientation: "horizontal" },
  ],
};

const pressDisclaimer =
  "Media outlets may use all content on this press kit—including images, videos, logos, and text—for editorial coverage of Skate Mates without prior permission.";

export { person, social, newsletter, home, blog, gallery, pressDisclaimer };
