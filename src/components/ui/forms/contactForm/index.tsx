import { component$, useSignal, $ } from "@builder.io/qwik";
import styles from "./index.module.css";
import ContactButton from "../../buttons/contact-button";

export default component$(() => {
  const status = useSignal<string>("");

  const handleSubmit = $(async (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const response = await fetch("/api/send-email", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      status.value = "Email sent successfully!";
      form.reset();
    } else {
      status.value = "Error sending email: " + result.message;
    }
  });

  return (
    <form onSubmit$={handleSubmit} class={styles.form}>
      <input
        type="text"
        name="email"
        id="contact-email"
        placeholder="abc@gmail.com"
      />
      <textarea
        name="message"
        id="contact-message"
        placeholder="Your message..."
      ></textarea>
      <ContactButton>Get in touch</ContactButton>
      <small>or send me an email to tomassorgetti456@gmail.com</small>
      {status.value && <p>{status.value}</p>}
    </form>
  );
});
