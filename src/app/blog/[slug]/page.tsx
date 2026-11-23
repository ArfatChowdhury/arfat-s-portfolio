// Created by `npx aiblogwrite init`. Your posts come from AIBlogWrite: https://aiblogwrite.com
import config from "../../../../aiblogwrite.config";
import { blogPostPage } from "aiblogwrite/next";

const page = blogPostPage(config);

export const revalidate = 300;
export const generateMetadata = page.generateMetadata;
export default page.Page;
