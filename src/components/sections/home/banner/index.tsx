import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";
import MainButton from "~/components/ui/buttons/main-button";
import HeroVideo from "~/assets/videos/hero.mp4";

export default component$(() => {
  return (
    <section class={styles.banner}>
      <div class={styles.wrapper}>
        <div class={styles.content}>
          <span>Hi, I'm Tomás</span>
          <h1>Full Stack Developer</h1>
          <p>
            I build scalable solutions with JavaScript frameworks, optimizing
            load times and UX. I’m eager to join startups or SaaS teams,
            delivering efficient code and driving growth in agile environments.
          </p>
          <MainButton href="#contact">Get in touch</MainButton>
        </div>
      </div>

      <div class={styles.bg}>
        <video preload="auto" src={HeroVideo} autoplay loop muted></video>
      </div>
    </section>
  );
});
