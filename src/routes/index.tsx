import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Banner from "~/components/sections/home/banner";
import Glitch from "~/components/sections/home/glitch";
import Team from "~/components/sections/home/team";
import Whatido from "~/components/sections/home/whatido";
import Whoiam from "~/components/sections/home/whoiam";

export default component$(() => {
  return (
    <>
      <Banner />
      <Whatido />
      <Whoiam />
      <Glitch />
      <Team />
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
