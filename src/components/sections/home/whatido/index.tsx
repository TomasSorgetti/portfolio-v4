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
                A Web Designer and Full Stack Web Developer. I live for shaping
                digital worlds that click with people and spark awe. Ready to
                cook up something wild together?
              </p>
            </li>
            <li>
              <span>02.</span>
              <p>
                A Web Designer and Full Stack Web Developer. I live for shaping
                digital worlds that click with people and spark awe. Ready to
                cook up something wild together?
              </p>
            </li>
            <li>
              <span>03.</span>
              <p>
                A Web Designer and Full Stack Web Developer. I live for shaping
                digital worlds that click with people and spark awe. Ready to
                cook up something wild together?
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});
