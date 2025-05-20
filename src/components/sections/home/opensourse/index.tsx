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
            I crafted a lively logo animation for "Lola Lolita Land" using CSS
            masks and keyframes. This vibrant effect elevated the frontend,
            delivering a memorable user experience.
          </p>
          <MainButton
            href="https://github.com/midudev/lolalolitaland.com"
            target="_blank"
          >
            Contribution
          </MainButton>
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
