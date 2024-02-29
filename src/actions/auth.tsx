"use server";

import { createClient } from "@/utils/supabase/server";

export async function SignUpAction(formData: FormData) {
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
    console.log(error);
  }
}
