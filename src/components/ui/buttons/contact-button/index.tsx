import { component$, Slot } from "@builder.io/qwik";
import styles from "./index.module.css";
import { track } from "@vercel/analytics";

export default component$(({ disabled = false }: { disabled?: boolean }) => {
  return (
    <button
      class={`${styles.button} ${disabled ? styles.disabled : ""}`}
      type="submit"
      disabled={disabled}
      onClick$={() => {
        track("form-click", { location: "home" });
      }}
    >
      <Slot />
    </button>
  );
});
