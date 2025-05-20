import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";
import MainButton from "~/components/ui/buttons/main-button";
import RotativeWorld from "~/assets/images/rotative_world.png";
import Discord from "~/assets/images/discord.png";

export default component$(() => {
  return (
    <section class={styles.whoiam}>
      <div class={styles.header}>
        <h2>Who I Am Off the Screen</h2>
        <p>
          I live for building what matters, fueled by endless curiosity and a
          good playlist. Let’s swap stories sometime.
        </p>
      </div>

      <div class={styles.bento}>
        {/* Card 1 */}
        <div class={`${styles.card} ${styles.card1}`}>
          <h3>Off the Grid</h3>
          <p>
            When I step away from screens, I’m brewing the perfect pour-over or
            sketching random thoughts. It’s where I recharge and dream bigger.
          </p>
          <div class={styles.rotativeWorldContainer}>
            <img
              src={RotativeWorld}
              alt="rotative world"
              draggable={false}
              loading="lazy"
              width={590}
              height={592}
            />
          </div>
        </div>

        {/* Card 2 */}
        <div class={`${styles.card} ${styles.card2}`}>
          <h3>What Lights Me Up</h3>
          <p>
            I thrive on turning wild ideas into sleek, living solutions. Every
            line of code and pixel I tweak is a chance to make something click.
          </p>
        </div>

        {/* Card 3 */}
        <div class={`${styles.card} ${styles.card3}`}>
          <h3>Why I Build</h3>
          <p>
            I’m hooked on crafting things that feel effortless and spark joy.
            Let’s shape ideas that stick with people long after they scroll.
          </p>
        </div>

        {/* Discord Card */}
        <div class={`${styles.discordCard}`}>
          <img
            src={Discord}
            alt="discord logo"
            draggable={false}
            loading="lazy"
            width={282}
            height={221}
          />
          <div>
            <h3>Fancy a Chat?</h3>
            <p>
              Hit me up on Discord for a quick game, a coding jam, or just to
              shoot the breeze. I’m always up for a good vibe.
            </p>
            <MainButton href="#">Discord</MainButton>
          </div>
        </div>
      </div>
    </section>
  );
});
