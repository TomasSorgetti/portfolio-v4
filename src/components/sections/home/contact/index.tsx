import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";
import Fire from "~/assets/images/contact.png";
import ContactForm from "~/components/ui/forms/contactForm";

export default component$(() => {
  return (
    <section class={styles.contact}>
      <div class={styles.wrapper}>
        <div class={styles.content}>
          <h2>Frame the Next Step</h2>
          <p>
            I turn ideas into bold realities with code and creativity. Got a
            spark to ignite? Let’s make something epic together, say hi!
          </p>
          <div class={styles.socials}></div>
        </div>
        <ContactForm />
        <img
          src={Fire}
          alt="fire smoke representation"
          width={904}
          height={671}
          draggable={false}
          loading="lazy"
        />
      </div>
    </section>
  );
});
