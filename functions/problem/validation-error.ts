export const onRequest = () => {
  return new Response(
    JSON.stringify({
      type: "https://problemdetails.io/errors/validation",
      title: "Validation Failed",
      status: 400,
      detail: "Multiple validation errors occurred.",
      instance: "/problem/validation-error",
      errors: {
        email: ["Email is required.", "Email must be valid."],
        password: ["Password must be at least 8 characters."]
      }
    }),
    {
      status: 400,
      headers: { "Content-Type": "application/problem+json" }
    }
  );
};