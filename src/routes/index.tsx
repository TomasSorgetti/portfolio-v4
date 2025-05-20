import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Banner from "~/components/sections/home/banner";
import Glitch from "~/components/sections/home/glitch";
import Whatido from "~/components/sections/home/whatido";
import Whoiam from "~/components/sections/home/whoiam";

export default component$(() => {
  return (
    <>
      <Banner />
      <Whatido />
      <Whoiam />
      <Glitch />
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
