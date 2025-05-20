import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";
import Fire from "~/assets/images/contact.png";
import ContactForm from "~/components/ui/forms/contactForm";
import Discord from "~/components/ui/socialIcons/discord";
import Github from "~/components/ui/socialIcons/github";
import Linkedin from "~/components/ui/socialIcons/linkedin";
import Telegram from "~/components/ui/socialIcons/telegram";
import Whatsapp from "~/components/ui/socialIcons/whatsapp";

export default component$(() => {
  return (
    <section class={styles.contact} id="contact">
      <div class={styles.wrapper}>
        <div class={styles.content}>
          <h2>Frame the Next Step</h2>
          <p>
            I turn ideas into bold realities with code and creativity. Got a
            spark to ignite? Let’s make something epic together, say hi!
          </p>
          <div class={styles.socials}>
            <Discord />
            <Github />
            <Linkedin />
            <Telegram />
            <Whatsapp />
          </div>
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
