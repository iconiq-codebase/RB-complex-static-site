import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "R.B. Complex",
    short_name: "R.B. Complex",
    description: "Shopping, offers and visitor information for R.B. Complex in New Road, Kathmandu.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ef",
    theme_color: "#a52229",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
