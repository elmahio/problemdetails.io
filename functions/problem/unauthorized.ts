export const onRequest = () => {
  return new Response(
    JSON.stringify({
      type: "https://problemdetails.io/errors/unauthorized",
      title: "Unauthorized",
      status: 401,
      detail: "Authentication is required to access this resource.",
      instance: "/problem/unauthorized"
    }),
    {
      status: 401,
      headers: { "Content-Type": "application/problem+json" }
    }
  );
};