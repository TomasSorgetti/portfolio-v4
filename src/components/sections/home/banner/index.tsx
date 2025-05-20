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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
            molestias ea, excepturi recusandae debitis
          </p>
          <MainButton href="#contact">Get in touch</MainButton>
        </div>
      </div>

      <div class={styles.bg}>
        <video src={HeroVideo} autoplay loop muted></video>
      </div>
    </section>
  );
});
