import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pariichay.com";
  const routes = [
    "",
    "/career",
    "/about",
    "/services",
    "/who-we-help",
    "/know-your-child",
    "/process",
    "/testimonials",
    "/faq",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" || route === "/career" ? "weekly" : "monthly") as
      | "weekly"
      | "monthly",
    priority: route === "" ? 1.0 : route === "/career" ? 0.9 : 0.8,
  }));
}
