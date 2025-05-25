import { component$, $, useSignal } from "@builder.io/qwik";
import styles from "./index.module.css";
import ContactButton from "../../buttons/contact-button";

export default component$(() => {
  const isLoading = useSignal(false);
  const errorEmail = useSignal("");
  const errorMessage = useSignal("");
  const successMessage = useSignal("");

  const validateEmail = $((email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  });

  const handleSubmit$ = $(async (event: SubmitEvent) => {
    event.preventDefault();

    errorEmail.value = "";
    errorMessage.value = "";
    successMessage.value = "";

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const email = formData.get("email")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    let hasError = false;

    if (!email) {
      errorEmail.value = "Email is required.";
      hasError = true;
    } else if (!(await validateEmail(email))) {
      errorEmail.value = "Email not valid.";
      hasError = true;
    }

    if (!message) {
      errorMessage.value = "Message is required.";
      hasError = true;
    }

    if (hasError) return;

    isLoading.value = true;

    const response = await fetch("/api/send-email", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      successMessage.value = "✅ Message sent successfully";
      form.reset();
      isLoading.value = false;
    } else {
      successMessage.value = "❌ Error sending message, try again later";
      isLoading.value = false;
    }
  });

  return (
    <form preventdefault:submit onSubmit$={handleSubmit$} class={styles.form}>
      <input
        type="text"
        name="email"
        id="contact-email"
        placeholder="abc@gmail.com"
      />
      {errorEmail.value && (
        <small class={styles.error}>{errorEmail.value}</small>
      )}

      <textarea
        name="message"
        id="contact-message"
        placeholder="Your message..."
      ></textarea>
      {errorMessage.value && (
        <small class={styles.error}>{errorMessage.value}</small>
      )}

      <ContactButton disabled={isLoading.value}>Get in touch</ContactButton>

      {successMessage.value && <p>{successMessage.value}</p>}

      <small>or send me an email to tomassorgetti456@gmail.com</small>
    </form>
  );
});
