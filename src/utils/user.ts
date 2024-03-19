"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import type { User } from "@supabase/supabase-js";

export async function isAdmin(): Promise<boolean> {
  const user = await getUser();
  const { role } = user.user_metadata;

  return role === "admin";
}

export async function getUser(): Promise<User> {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    throw new Error("Unauthorized.");
  }

  return data.user;
}

export async function getAllUsers(): Promise<User[]> {
  if (!(await isAdmin())) {
    throw new Error(`Unauthorized.`);
  }

  const supabase = createServerComponentClient(
    { cookies },
    { supabaseKey: process.env.SERVICE_KEY }
  );

  const {
    data: { users },
    error,
  } = await supabase.auth.admin.listUsers({
    page: 1,
    perPage: 10000,
  });

  // yes, we should handle the error here.

  return users;
}
