import { authMiddleware } from "@clerk/nextjs";

/* export default authMiddleware({
  publicRoutes: ["/test"],
}); */
export default authMiddleware({});
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
