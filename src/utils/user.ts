import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import type { User } from "@supabase/supabase-js";

export async function getUser(): Promise<User> {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    throw new Error("Unauthorized.");
  }

  return data.user;
}

export async function isAdmin(): Promise<boolean> {
  const user = await getUser();
  const { role } = user.user_metadata;

  return role === "admin";
}
