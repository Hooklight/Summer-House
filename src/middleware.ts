import { NextRequest, NextResponse } from "next/server";

const apexHost = "summerhousemedspa.com";
const wwwHost = `www.${apexHost}`;

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (host === wwwHost) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.hostname = apexHost;
    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
