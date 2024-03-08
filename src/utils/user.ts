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
