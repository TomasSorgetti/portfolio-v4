import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";
import MainButton from "~/components/ui/buttons/main-button";
import LolaLolitaLand from "~/assets/images/lolalolita.png";

export default component$(() => {
  return (
    <section class={styles.opensourse}>
      <div class={styles.card}>
        <div class={styles.content}>
          <span class={styles.tag}>OPEN SOURSE CONTRIBUTION</span>
          <h2>Lola Lolita Land</h2>
          <p>
            A Web Designer and Full Stack Web Developer. I live for shaping
            digital worlds that click with people and spark awe. Ready to cook
            up something wild together?
          </p>
          <MainButton href="#">Contribution</MainButton>
        </div>
        <img
          src={LolaLolitaLand}
          alt="Lola Lolita Land Logo"
          draggable={false}
          loading="lazy"
          width={361}
          height={361}
        />
      </div>
    </section>
  );
});
