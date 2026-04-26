import type { NextConfig } from "next";

/**
 * Built for static hosting on GitHub Pages.
 *
 * - `output: "export"`        — emit a fully static `out/` directory at build time
 *                                (no Node server needed at runtime).
 * - `images.unoptimized: true` — the default `next/image` optimizer requires a
 *                                server runtime; we don't have one on Pages.
 * - `trailingSlash: true`     — Pages serves `/foo/` better than `/foo` because
 *                                each route lands on its own `index.html`.
 *
 * No `basePath` / `assetPrefix` is needed: the site is served at the root of a
 * custom domain (anshula.io), so all asset URLs resolve from `/`.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
