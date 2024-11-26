export async function contactForm(
  first_name,
  last_name,
  email,
  phone,
  message
) {
  const endpoint = import.meta.env.VITE_CONTACT_FORM_API_ENDPOINT;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        phone,
        message,
      }),
    });

    return {
      status: response.status,
      data: await response.json(),
    };
  } catch (error) {
    return {
      status: -1,
      data: "An Unknown Error Occured",
    };
  }
}
