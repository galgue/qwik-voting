import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useAuthSession } from "./plugin@auth";

export default component$(() => {
  const session = useAuthSession();
  return <>{session.value?.user?.email}</>;
});

export const head: DocumentHead = {
  title: "Qwik voting app",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
