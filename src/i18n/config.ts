// Plain module (no "use client") so server components can safely import
// these constants. Importing from a "use client" module can yield
// undefined values across the RSC boundary in some Next.js 16 builds.
export const LANG_COOKIE = "translite-lang";
