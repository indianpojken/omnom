"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

type Credentials = { email: string; password: string };

function getData(formData: FormData): Credentials {
  return {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
}

function redirectAfterLogin() {
  revalidatePath("/manage", "layout");
  redirect("/manage");
}

export async function SignUpAction(
  prevState: string | null | undefined,
  formData: FormData
) {
  const supabase = createClient();
  const data = getData(formData);

  const { error } = await supabase.auth.signUp({
    ...data,
    options: {
      data: {
        role: "owner",
      },
    },
  });

  if (error) {
    return `Hoppsan! Något gick snett.\nEpost-adressen verkar vara upptagen.`;
  }

  redirectAfterLogin();
}

export async function SignInAction(
  prevState: string | null | undefined,
  formData: FormData
) {
  const supabase = createClient();
  const data = getData(formData);

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return `Hoppsan! Något gick snett.`;
  }

  redirectAfterLogin();
}
