const formElement = document.querySelector("#contact-form");
if (formElement === null) {
  throw Error("Hey! You are missing the form element with id: contact-form");
}

formElement.addEventListener("submit", async (event) => {
  // Prevent form submission from refreshing page
  event.preventDefault();

  // Find the values of the input fields
  const contactMessage = {
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };

  // Send message to the backend (serverless function)
  const response = await fetch("/api/contact-mail", {
    method: "POST",
    body: JSON.stringify(contactMessage),
  });

  // If success clear input fields
  if (response.ok) {
    formElement.reset();
  }
});
