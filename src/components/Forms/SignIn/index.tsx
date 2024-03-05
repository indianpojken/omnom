"use client";

import { useFormState } from "react-dom";

import { SignInAction } from "@/actions/auth";

import Field from "@/components/Form/Field";
import SubmitButton from "@/components/Form/SubmitButton";
import Notification from "@/components/Form/Notification";

export default function Sign() {
  const [state, formAction] = useFormState(SignInAction, null);

  return (
    <form className="flex flex-col gap-4 p-4" action={formAction}>
      <section className="flex flex-col gap-6">
        <Field
          id="email"
          type="email"
          placeholder="E-postadress"
          required
          icon="email"
          pattern=".+@.+\..{2,4}"
        />

        <Field
          id="password"
          type="password"
          placeholder="Lösenord"
          required
          icon="password"
          minLength={6}
        />
      </section>

      <footer className="flex">
        <SubmitButton>Kliv på</SubmitButton>
      </footer>

      <Notification message={state} />
    </form>
  );
}
