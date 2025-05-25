import { component$, Slot } from "@builder.io/qwik";
import styles from "./index.module.css";

export default component$(() => {
  return (
    <button class={styles.button} type="submit" disabled>
      <Slot />
    </button>
  );
});
