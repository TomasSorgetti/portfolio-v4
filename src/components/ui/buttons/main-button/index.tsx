import { component$, Slot } from "@builder.io/qwik";
import styles from "./index.module.css";

export default component$(({ href = "#", ...props }: { href: string }) => {
  return (
    <a href={href} class={styles.button} {...props}>
      <Slot />
    </a>
  );
});
