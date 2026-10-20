// Created by `npx aiblogwrite init`. Your posts come from AIBlogWrite: https://aiblogwrite.com
import config from "../../../aiblogwrite.config";
import { blogSitemap } from "aiblogwrite/next";

export const revalidate = 3600;
export default blogSitemap(config);
