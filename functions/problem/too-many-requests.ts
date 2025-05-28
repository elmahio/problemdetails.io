export const onRequest = () => {
  return new Response(
    JSON.stringify({
      type: "https://problemdetails.io/errors/too-many-requests",
      title: "Too Many Requests",
      status: 429,
      detail: "You have sent too many requests in a given amount of time.",
      instance: "/problem/too-many-requests"
    }),
    {
      status: 429,
      headers: { "Content-Type": "application/problem+json" }
    }
  );
};