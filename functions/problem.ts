export const onRequest = () => {
  return new Response(
    JSON.stringify({
      type: "https://problemdetails.io/errors/invalid-input",
      title: "Invalid input",
      status: 400,
      detail: "You must provide a valid email address.",
      instance: "/problem"
    }),
    {
      status: 400,
      headers: { "Content-Type": "application/problem+json" }
    }
  );
};