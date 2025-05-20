import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";
import Glitch from "~/assets/images/glitch.png";

export default component$(() => {
  return (
    <section class={styles.glitch}>
      <h2>Step Into Glitch Design Lab’s Glow</h2>
      <p>
        I co-founded a space where daring ideas morph into web creations that
        pulse with life. Come see what we’re bringing to light!
      </p>

      <a href="https://glitchdesignlab.com" target="_blank">
        <img
          src={Glitch}
          alt="glitch design lab"
          width={1280}
          height={748}
          draggable={false}
          loading="lazy"
        />
      </a>
    </section>
  );
});
