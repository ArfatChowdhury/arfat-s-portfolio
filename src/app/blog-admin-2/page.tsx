// Created by `npx aiblogwrite init`. Your posts come from AIBlogWrite: https://aiblogwrite.com
import config from "../../../aiblogwrite.config";
import { blogAdminPage } from "aiblogwrite/next";

const page = blogAdminPage(config);

export const metadata = page.metadata;
export default page.Page;
