export const onRequest = () => {
  return new Response(
    JSON.stringify({
      type: "https://problemdetails.io/errors/server-error",
      title: "Internal Server Error",
      status: 500,
      detail: "An unexpected error occurred.",
      instance: "/problem/server-error"
    }),
    {
      status: 500,
      headers: { "Content-Type": "application/problem+json" }
    }
  );
};