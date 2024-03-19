"use client";

import { useFormState } from "react-dom";

import { SignUpAction } from "@/actions/auth";

import SubmitButton from "@/components/Form/SubmitButton";
import MatchFields, { useInputMatcher } from "@/components/Form/MatchFields";
import Notification from "@/components/Form/Notification";
import { Invite } from "@/types";

export default function SignUp({ invite }: { invite: Invite }) {
  const { setMatch, isAllMatching } = useInputMatcher();
  const [state, formAction] = useFormState(
    SignUpAction.bind(null, invite),
    null
  );

  return (
    <form
      className="flex flex-col gap-4 p-4 w-full max-w-96"
      action={formAction}
    >
      <section className="flex flex-col gap-6">
        <MatchFields
          id="email"
          type="email"
          placeholder="E-postadress"
          autoComplete="off"
          required
          icon
          matcher={setMatch}
        />

        <MatchFields
          id="password"
          type="password"
          placeholder="Lösenord"
          required
          icon
          matcher={setMatch}
          minLength={6}
        />
      </section>

      <footer className="flex">
        <SubmitButton disabled={!isAllMatching}>Skapa konto</SubmitButton>
      </footer>

      <Notification message={state} />
    </form>
  );
}
