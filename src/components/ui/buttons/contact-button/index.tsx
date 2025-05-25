import { component$, Slot } from "@builder.io/qwik";
import styles from "./index.module.css";

export default component$(({ disabled = false }: { disabled?: boolean }) => {
  return (
    <button
      class={`${styles.button} ${disabled ? styles.disabled : ""}`}
      type="submit"
      disabled={disabled}
    >
      <Slot />
    </button>
  );
});
