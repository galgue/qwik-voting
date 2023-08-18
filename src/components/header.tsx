import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import {
  useAuthSession,
  useAuthSignin,
  useAuthSignout,
} from "~/routes/plugin@auth";

export const Header = component$(() => {
  const session = useAuthSession();
  const signin = useAuthSignin();
  const signout = useAuthSignout();

  return (
    <div class="flex m-5">
      <div class="flex-grow"></div>
      {session.value?.user?.email ? (
        <Form action={signout}>
          <button>Sign out</button>
        </Form>
      ) : (
        <Form action={signin}>
          <button>Sign in</button>
        </Form>
      )}
    </div>
  );
});
