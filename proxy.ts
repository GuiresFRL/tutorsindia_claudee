import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 410 Gone — removed WordPress archive paths that should never resolve again.
export function proxy(_request: NextRequest) {
  return new NextResponse("Gone", {
    status: 410,
    headers: { "Content-Type": "text/plain" },
  });
}

export const config = {
  matcher: [
    "/academy/tag",
    "/academy/tag/:path*",
    "/blog/tag",
    "/blog/tag/:path*",
    "/testimonial-types",
    "/testimonial-types/:path*",
    "/feed",
    "/feed/:path*",
    "/category",
    "/category/:path*",
    "/tag",
    "/tag/:path*",
    "/blog/caegory",
    "/blog/caegory/:path*",
    "/uk/category",
    "/uk/category/:path*",
    "/sample",
    "/sample/:path*",
  ],
};
