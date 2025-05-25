import { component$, useSignal, $ } from "@builder.io/qwik";
import styles from "./index.module.css";

export default component$(() => {
  const isMenuOpen = useSignal(false);

  const toggleMenu = $(() => {
    isMenuOpen.value = !isMenuOpen.value;
  });
  const closeMenu = $(() => {
    isMenuOpen.value = false;
  });

  if (isMenuOpen.value) {
    document.body.style.overflow = "hidden";
  }

  return (
    <header class={`${styles.header} ${isMenuOpen.value ? styles.open : ""}`}>
      <nav>
        <a href="#" class={styles.logo}>
          Tomás Sorgetti
        </a>

        <button class={styles.hamburger} onClick$={toggleMenu}>
          <div class={styles.bar}></div>
          <div class={styles.bar}></div>
          <div class={styles.bar}></div>
        </button>

        <ul class={styles.menu}>
          <li onClick$={closeMenu}>
            <a href="#whoiam">Who I am</a>
          </li>
          <li onClick$={closeMenu}>
            <a href="#glitch">Glitch Design</a>
          </li>
          <li onClick$={closeMenu}>
            <a href="#mywork">My work</a>
          </li>
          <li onClick$={closeMenu}>
            <a href="#contact">Get in touch</a>
          </li>
        </ul>
      </nav>
    </header>
  );
});
