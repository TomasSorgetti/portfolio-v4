import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Banner from "~/components/sections/home/banner";
import Contact from "~/components/sections/home/contact";
import Github from "~/components/sections/home/github";
import Glitch from "~/components/sections/home/glitch";
import Opensourse from "~/components/sections/home/opensourse";
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
      <Opensourse />
      <Github />
      <Contact />
    </>
  );
});

export const head: DocumentHead = {
  title: "Tomás Sorgetti - Desarrollador Web - Portfolio",
  meta: [
    {
      name: "description",
      content: "Desarrollador Web - Tomás Sorgetti",
    },
  ],
};
