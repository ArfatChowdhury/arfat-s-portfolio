// Created by `npx aiblogwrite init`. Your posts come from AIBlogWrite: https://aiblogwrite.com
import config from "../../aiblogwrite.config";
import { siteSitemap } from "aiblogwrite/next";

// /sitemap.xml: your website's pages, found when the blog was added, and every blog post.
// Add a new page here so search engines find it; new posts are added by themselves.
const pages: string[] = [
  "/",
];

export const revalidate = 3600;
export default siteSitemap(config, pages);
