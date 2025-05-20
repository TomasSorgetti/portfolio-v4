import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";
import PinkWorld from "~/assets/images/pink_world.png";

export default component$(() => {
  return (
    <section class={styles.whatido}>
      <div class={styles.card}>
        <div class={styles.imageContainer}>
          <img
            class={styles.image}
            src={PinkWorld}
            alt="pink world"
            width="429"
            height="942"
            draggable={false}
          />
        </div>

        <div class={styles.content}>
          <h2>Crafting custom websites with robust code and ongoing support</h2>
          <div class={styles.line}></div>
          <ul>
            <li>
              <span>01.</span>
              <p>
                I create engaging, responsive interfaces in Figma, with
                interactive prototypes ensuring optimal user experience and
                project clarity.
              </p>
            </li>
            <li>
              <span>02.</span>
              <p>
                I build dynamic interfaces using React, Nextjs, Astro, Qwik,
                delivering high-performance, accessible, and cross-platform
                solutions.
              </p>
            </li>
            <li>
              <span>03.</span>
              <p>
                I develop scalable servers with Node.js, integrating APIs and
                databases for secure, customized functionality with ongoing
                support.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});
