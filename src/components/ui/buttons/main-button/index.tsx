import { component$, Slot } from "@builder.io/qwik";
import styles from "./index.module.css";

type Props = {
  href: string;
  target?: string;
};

export default component$(
  ({ href = "#", target = "_self", ...props }: Props) => {
    return (
      <a href={href} target={target} class={styles.button} {...props}>
        <Slot />
      </a>
    );
  }
);
