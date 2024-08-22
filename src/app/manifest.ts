import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JENZY",
    short_name: "Jenzy portfolio",
    description:
      "I am Seng Seang Leng, and Welcome to my portfolio, where I embark on a thrilling journey into the world of full stack web development.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
