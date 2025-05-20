import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Banner from "~/components/sections/home/banner";
import Whatido from "~/components/sections/home/whatido";

export default component$(() => {
  return (
    <>
      <Banner />
      <Whatido />
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
