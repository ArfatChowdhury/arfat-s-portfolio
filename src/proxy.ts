// Created by `npx aiblogwrite init`: sends the SEO redirects approved for this site (AIBlogWrite), as real 301s.
import { seoProxy } from "aiblogwrite/seo";
import abwConfig from "../aiblogwrite.config";

export default seoProxy(abwConfig);

// Pages only: not Next.js's own files, API routes or files with an extension.
export const config = { matcher: ["/((?!_next/|api/|.*\\..*).*)"] };
