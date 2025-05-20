import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";
import TeamCard from "~/components/ui/cards/teamCard";

const reasonList = [
  {
    title: "Reason 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    title: "Reason 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    title: "Reason 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    title: "Reason 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
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
