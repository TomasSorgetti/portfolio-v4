import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";
import MainButton from "~/components/ui/buttons/main-button";
import GithubImg from "~/assets/images/github.png";

export default component$(() => {
  return (
    <section class={styles.github}>
      <div class={styles.card}>
        <div class={styles.content}>
          <h2>Check My GitHub</h2>
          <p>
            Check my GitHub to explore projects built with React, Node.js, and
            CSS animations, designed for fast and engaging user experiences.
          </p>
          <MainButton href="https://github.com/TomasSorgetti" target="_blank">
            GitHub
          </MainButton>
        </div>

        <img
          src={GithubImg}
          alt="github logo"
          draggable={false}
          loading="lazy"
          width={272}
          height={265}
          class={styles.logo}
        />
      </div>
    </section>
  );
});
