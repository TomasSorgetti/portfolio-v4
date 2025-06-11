import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";
import LearningSpark from "~/assets/images/projects/learningspark.png";
import Cl from "~/assets/images/projects/cl.png";
import ProfileUp from "~/assets/images/projects/profileup.png";
import Glasstown from "~/assets/images/projects/glasstown.png";

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
              Developed a responsive landing page with React, Next.js, and
              Tailwind CSS, integrated with an Express + MongoDB backend.
              Deployed on AWS, improved SEO, achieved 99.9% uptime, and reduced
              load time by 60%.{" "}
              <span>Tech: React, Next.js, Express, MongoDB, Redis, AWS.</span>
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
              Developed a responsive React and Vite website with an interactive
              catalog, optimized performance by 20%, and trained a teammate in
              React.
              <span>Tech: React, Vite</span>
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
              Built a responsive React website for an HR psychologist with clean
              design and fast loading.
              <span>Tech: React</span>
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
        <a
          href="https://glasstown.com.ar"
          target="_blank"
          class={`${styles.card} ${styles.card4}`}
        >
          <div class={styles.cardContent}>
            <h3>Glasstown</h3>
            <p>
              Developed a responsive landing page with Astro. Optimized
              performance by 40% through efficient coding practices.
              <span>Tech: Astro, React</span>
            </p>
          </div>
          <div class={styles.imageContainer}>
            <img
              src={Glasstown}
              alt="glasstown project"
              draggable={false}
              loading="lazy"
              width={783}
              height={392}
            />
          </div>
        </a>
      </div>
    </section>
  );
});
