// Created by `npx aiblogwrite init`. Your posts come from AIBlogWrite: https://aiblogwrite.com
// Your posts are yours: with AIBLOGWRITE_DATABASE_URL set, AIBlogWrite sends each one here (signed,
// so only it can) and your blog keeps them in your own database. Without it, posts are read from AIBlogWrite.
import config from "../../../../aiblogwrite.config";
import { blogSyncRoute } from "aiblogwrite/next";

// Time to fetch a post's photos into your database (hosts often stop a request sooner).
export const maxDuration = 60;
export const POST = blogSyncRoute(config);
