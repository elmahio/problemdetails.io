export const onRequest = () => {
  return new Response(
    JSON.stringify({
      type: "https://problemdetails.io/errors/not-found",
      title: "Resource not found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "/problem/not-found"
    }),
    {
      status: 404,
      headers: { "Content-Type": "application/problem+json" }
    }
  );
};