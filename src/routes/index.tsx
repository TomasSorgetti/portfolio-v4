import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Desarrollador Web - Tomás Sorgetti",
  meta: [
    {
      name: "description",
      content: "Desarrollador Web - Tomás Sorgetti",
    },
  ],
};
