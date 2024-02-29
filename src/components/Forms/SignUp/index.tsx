"use client";

import { useEffect } from "react";
import { useFormStatus } from "react-dom";

import { getInviteById } from "@/services/invites";
import { SignUpAction } from "@/actions/auth";
import SubmitButton from "@/components/Form/SubmitButton";
import MatchFields, { useInputMatcher } from "@/components/Form/MatchFields";

export default function SignUp() {
  const { setMatch, isAllMatching } = useInputMatcher();

  const { pending } = useFormStatus();

  useEffect(() => console.log(pending), [pending]);

  return (
    <form className="flex flex-col gap-4 p-8" action={SignUpAction}>
      <section className="flex flex-col gap-6">
        <MatchFields
          id="email"
          type="email"
          placeholder="E-postadress"
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
        />
      </section>

      <footer className="flex flex-row gap-2">
        <SubmitButton disabled={!isAllMatching}>Skapa konto</SubmitButton>
      </footer>
    </form>
  );
}
