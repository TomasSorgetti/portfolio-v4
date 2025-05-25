import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";
import LearningSpark from "~/assets/images/projects/learningspark.png";
import Cl from "~/assets/images/projects/cl.png";
import ProfileUp from "~/assets/images/projects/profileup.png";
import iEscrow from "~/assets/images/projects/iescrow.png";

export default component$(() => {
  return (
    <section id="mywork" class={styles.projects}>
      <h2>Projects that I made</h2>

      <div class={styles.bento}>
        {/* Card 1 */}
        <a
          href="https://learning-spark.com/"
          target="_blank"
          class={`${styles.card} ${styles.card1}`}
        >
          <div class={styles.cardContent}>
            <h3>Learning Spark</h3>
            <p>
              When I’m not coding, I’m sipping Coca-Cola or sketching ideas that
              ignite my creativity. These moments inspire my designs and fuel
              innovative web solutions.
            </p>
          </div>
          <div class={styles.imageContainer}>
            <img
              src={LearningSpark}
              alt="learning spark project"
              draggable={false}
              loading="lazy"
              width={783}
              height={392}
            />
          </div>
        </a>

        {/* Card 2 */}
        <a
          href="https://clindustrialsupply.com.ar/home"
          target="_blank"
          class={`${styles.card} ${styles.card2}`}
        >
          <div class={styles.cardContent}>
            <h3>Cl industrial Supply</h3>
            <p>
              I transform ideas into reality with Figma, React, and Next.js,
              crafting fast, user-centric interfaces that solve problems and
              shine on any device.
            </p>
          </div>
          <div class={styles.imageContainer}>
            <img
              src={Cl}
              alt="cl industrial supply project"
              draggable={false}
              loading="lazy"
              width={535}
              height={446}
            />
          </div>
        </a>

        {/* Card 3 */}
        <a
          href="https://profileupmm.com.ar"
          target="_blank"
          class={`${styles.card} ${styles.card3}`}
        >
          <div class={styles.cardContent}>
            <h3>Profile Up</h3>
            <p>
              I build to make the web feel seamless and engaging, using Node.js
              and clean code to deliver scalable solutions that leave a lasting
              impact.
            </p>
          </div>
          <div class={styles.imageContainer}>
            <img
              src={ProfileUp}
              alt="Profile up project"
              draggable={false}
              loading="lazy"
              width={481}
              height={392}
            />
          </div>
        </a>

        {/* Card 4 */}
        <div class={`${styles.card} ${styles.card4}`}>
          <div class={styles.cardContent}>
            <h3>Crypto Exchange Platform</h3>
            <p>
              Hit me up on Discord for a quick game, a coding jam, or just to
              shoot the breeze. I’m always up for a good vibe.
            </p>
          </div>
          <div class={styles.imageContainer}>
            <img
              src={iEscrow}
              alt="cryptocurrency exchange platform project"
              draggable={false}
              loading="lazy"
              width={783}
              height={392}
            />
          </div>
        </div>
      </div>
    </section>
  );
});
