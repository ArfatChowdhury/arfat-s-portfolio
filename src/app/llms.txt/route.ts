// Created by `npx aiblogwrite init`. Your posts come from AIBlogWrite: https://aiblogwrite.com
// /llms.txt: a plain-text map of your site for AI tools like ChatGPT and Claude (llmstxt.org), listing your newest posts.
import config from "../../../aiblogwrite.config";
import { llmsTxtRoute } from "aiblogwrite/next";

export const revalidate = 3600;
export const GET = llmsTxtRoute(config);
