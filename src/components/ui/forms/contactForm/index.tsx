import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";
import ContactButton from "../../buttons/contact-button";

export default component$(() => {
  return (
    <form class={styles.form}>
      <input type="text" name="" id="" placeholder="abc@gmail.com" />
      <textarea name="" id="" placeholder="Your message..."></textarea>
      <ContactButton>Get in touch</ContactButton>
      <small>or send me an email to tomassorgetti456@gmail.com</small>
    </form>
  );
});
