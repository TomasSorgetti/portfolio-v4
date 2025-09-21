import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";
import LearningSpark from "~/assets/images/projects/learningspark.png";
import Gooster from "~/assets/images/projects/gooster.webp";
import Proterline from "~/assets/images/projects/proterline.webp";
import SieteVidas from "~/assets/images/projects/siete-vidas.webp";
import { track } from "@vercel/analytics";

export default component$(() => {
  return (
    <section id="mywork" class={styles.projects}>
      <h2>Projects that I made</h2>

      <div class={styles.bento}>
        {/* Card 1 */}
        <a
          href="https://proterline.com.ar"
          target="_blank"
          class={`${styles.card} ${styles.card1}`}
          onClick$={() => {
            track("learningspark-click", { location: "home" });
          }}
        >
          <div class={styles.cardContent}>
            <h3>Proterline</h3>
            <p>
              Developed a website frontend from a Figma design, creating a
              responsive interface with dynamic product display. Worked
              independently on GitHub, optimizing performance, accessibility,
              and SEO, achieving perfect Lighthouse scores (100/100).
              <span>
                Tech: TypeScript, Astro, React, Tailwind, API integration, Web
                Performance
              </span>
            </p>
          </div>
          <div class={styles.imageContainer}>
            <img
              src={Proterline}
              alt="proterline project"
              draggable={false}
              loading="lazy"
              width={783}
              height={392}
            />
          </div>
        </a>

        {/* Card 2 */}
        <a
          href="https://7vidas.online"
          target="_blank"
          class={`${styles.card} ${styles.card2}`}
          onClick$={() => {
            track("clindustrialsupply-click", { location: "home" });
          }}
        >
          <div class={styles.cardContent}>
            <h3>Siete Vidas</h3>
            <p>
              Developed a website frontend for cat nutrition from a Figma
              design, with a responsive interface and dynamic products,
              optimizing performance, accessibility, and SEO, achieving perfect
              Lighthouse scores.
              <span>
                Tech: TypeScript, Astro, Tailwind, API integration, Web
                Performance
              </span>
            </p>
          </div>
          <div class={styles.imageContainer}>
            <img
              src={SieteVidas}
              alt="siete vidas project"
              draggable={false}
              loading="lazy"
              width={535}
              height={446}
            />
          </div>
        </a>

        {/* Card 3 */}
        <a
          href="https://gooster.com.ar"
          target="_blank"
          class={`${styles.card} ${styles.card3}`}
          onClick$={() => {
            track("profileup-click", { location: "home" });
          }}
        >
          <div class={styles.cardContent}>
            <h3>Gooster</h3>
            <p>
              Optimized a React-based website, enhancing performance,
              accessibility, and technical SEO. Improved code, images, and
              styles, achieving perfect Lighthouse scores.
              <span>Tech: React, Vite, Tailwind, Web Performance</span>
            </p>
          </div>
          <div class={styles.imageContainer}>
            <img
              src={Gooster}
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
          href="https://learning-spark.com/"
          target="_blank"
          class={`${styles.card} ${styles.card4}`}
          onClick$={() => {
            track("glasstown-click", { location: "home" });
          }}
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
      </div>
    </section>
  );
});
