"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function SignUpAction(
  prevState: string | null | undefined,
  formData: FormData
) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp({
    ...data,
    options: {
      data: {
        role: "owner",
      },
    },
  });

  if (error) {
    return `
      Hoppsan! Något gick snett.
      \nEpost-adressen verkar vara upptagen.
    `;
  }
}

export async function SignInAction(
  prevState: string | null | undefined,
  formData: FormData
) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error.message, error.name);
    return `Hoppsan! Något gick snett.`;
  }

  revalidatePath("/manage", "layout");
  redirect("/manage");
}
