import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";
import TeamCard from "~/components/ui/cards/teamCard";

const reasonList = [
  {
    title: "Integrated Design & Code",
    description:
      "I create intuitive interfaces with Figma and build dynamic apps, ensuring seamless, visually striking user experiences.",
  },
  {
    title: "Scalable Fullstack Solutions",
    description:
      "I develop robust apps with Node.js and JavaScript frameworks, optimizing performance and delivering tailored solutions that grow with business needs.",
  },
  {
    title: "Proactive Collaboration",
    description:
      "I thrive in agile teams, contributing innovative ideas and adapting quickly to deliver high-quality projects in dynamic environments.",
  },
  {
    title: "Passion for Visual Impact",
    description:
      "From CSS masks and keyframes animations to optimized sites, I craft engaging solutions that strengthen brand identity.",
  },
];

export default component$(() => {
  return (
    <section class={styles.team}>
      <h2>Reasons to Add Me to Your Team</h2>

      <div class={styles.cards}>
        {reasonList.map(({ title, description }) => (
          <TeamCard
            key={title}
            title={title}
            description={description}
            icon=""
          />
        ))}
      </div>
    </section>
  );
});
