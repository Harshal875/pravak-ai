import { NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

const isOrgFreeRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/org-selection(.*)"
]);

// @ts-ignore -- duplicate next.js resolution from @sentry/nextjs causes non-portable type
export default clerkMiddleware(async (auth, req) => {
  const { userId, orgId } = await auth();

  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  if (userId && !orgId && !isOrgFreeRoute(req)) {
    const searchParams = new URLSearchParams({ redirectUrl: req.url });

    const orgSelection = new URL(
      `/org-selection?${searchParams.toString()}`,
      req.url,
    );

    return NextResponse.redirect(orgSelection);
  }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}