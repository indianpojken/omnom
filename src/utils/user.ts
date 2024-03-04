import { createClient } from "@/utils/supabase/server";
import type { User } from "@supabase/supabase-js";

export async function getUser(): Promise<User> {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    throw new Error("Unauthorized.");
  }

  return data.user;
}
