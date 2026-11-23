// Created by `npx aiblogwrite init`. Your posts come from AIBlogWrite: https://aiblogwrite.com
// Your posts' photos, kept in your own database with the posts (see aiblogwrite-sync).
import config from "../../../../../aiblogwrite.config";
import { blogImageRoute } from "aiblogwrite/next";

export const GET = blogImageRoute(config);
