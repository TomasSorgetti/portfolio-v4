import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";

export default component$(() => {
  return (
    <footer class={styles.footer}>
      <p>Copyright&copy; {new Date().getFullYear()} Tomás Sorgetti</p>
    </footer>
  );
});
