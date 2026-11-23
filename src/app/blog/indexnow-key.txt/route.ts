// Created by `npx aiblogwrite init`. Your posts come from AIBlogWrite: https://aiblogwrite.com
// Bing and the AI search engines that read its index are told about each new post (IndexNow); this proves the site is yours.
import config from "../../../../aiblogwrite.config";
import { indexNowKeyRoute } from "aiblogwrite/next";

export const GET = indexNowKeyRoute(config);
