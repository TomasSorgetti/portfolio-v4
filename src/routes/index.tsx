import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Banner from "~/components/sections/home/banner";
import Contact from "~/components/sections/home/contact";
import Github from "~/components/sections/home/github";
import Glitch from "~/components/sections/home/glitch";
import Opensourse from "~/components/sections/home/opensourse";
import Projects from "~/components/sections/home/projects";
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
      <Projects />
      <Team />
      <Opensourse />
      <Github />
      <Contact />
    </>
  );
});

export const head: DocumentHead = {
  title: "Tomás Sorgetti - Web Developer - Portfolio",
  meta: [
    {
      name: "description",
      content:
        "I build scalable solutions with JavaScript frameworks, optimizing load times and UX. I’m eager to join startups or SaaS teams, delivering efficient code and driving growth in agile environments.",
    },
    {
      name: "keywords",
      content: "tomassorgetti, ux, ui, ux/ui, html, css, sass, tailwind, javascript, typescript, react, vue, node, express, nest, next, qwik, astro, web development",
    }
  ],
};
