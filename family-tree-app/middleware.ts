import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Add public routes here if any, e.g.
  // publicRoutes: ["/"],
});

export const config = {
  matcher: ['/((?!.+\\.[\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
