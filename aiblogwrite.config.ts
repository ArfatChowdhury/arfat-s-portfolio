// Created by `npx aiblogwrite init`. Your posts come from AIBlogWrite: https://aiblogwrite.com
import type { AIBlogWriteConfig } from "aiblogwrite";

const config: AIBlogWriteConfig = {
  // Your live website. Posts are found by it, and link to it.
  domain: "arfat-s-portfolio.vercel.app",
  // Shows AIBlogWrite this website is yours (it reads it from your live site). Public, not a password.
  siteKey: "cd1ccacac0abaddb0ac06c8facd298f8",
  // Where the blog and its admin are on your site.
  blogPath: "/articles",
  adminPath: "/blog-admin-2",
};

export default config;
