import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";

type Props = {
  icon: string;
  title: string;
  description: string;
};

export default component$(({ icon, title, description }: Props) => {
  return (
    <article class={styles.card}>
      <img
        src={icon}
        alt="icon"
        draggable={false}
        loading="lazy"
        width={100}
        height={100}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
});
