import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";
import TeamCard from "~/components/ui/cards/teamCard";
import Design from "~/assets/icons/design.png";
import Scalable from "~/assets/icons/scalable.png";
import Colab from "~/assets/icons/colaboration.png";
import Passion from "~/assets/icons/passion.png";

const reasonList = [
  {
    title: "Integrated Design & Code",
    description:
      "I create intuitive interfaces with Figma and build dynamic apps, ensuring seamless, visually striking user experiences.",
    icon: Design,
  },
  {
    title: "Scalable Fullstack Solutions",
    description:
      "I develop robust apps with Node.js and JavaScript frameworks, optimizing performance and delivering tailored solutions that grow with business needs.",
    icon: Scalable,
  },
  {
    title: "Proactive Collaboration",
    description:
      "I thrive in agile teams, contributing innovative ideas and adapting quickly to deliver high-quality projects in dynamic environments.",
    icon: Colab,
  },
  {
    title: "Passion for Visual Impact",
    description:
      "From CSS masks and keyframes animations to optimized sites, I craft engaging solutions that strengthen brand identity.",
    icon: Passion,
  },
];

export default component$(() => {
  return (
    <section class={styles.team}>
      <h2>Reasons to Add Me to Your Team</h2>

      <div class={styles.cards}>
        {reasonList.map(({ title, description, icon }) => (
          <TeamCard
            key={title}
            title={title}
            description={description}
            icon={icon}
          />
        ))}
      </div>
    </section>
  );
});
