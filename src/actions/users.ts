"use server";

import {
  User,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { deleteRestaurantByOwnerId } from "@/services/restaurants";
import { isAdmin } from "@/utils/user";
import { revalidatePath } from "next/cache";

export async function removeUserAction(user: User): Promise<void> {
  if (!(await isAdmin())) {
    throw new Error(`Unauthorized.`);
  }

  const supabase = createServerComponentClient(
    { cookies },
    { supabaseKey: process.env.SERVICE_KEY }
  );

  await supabase.auth.admin.deleteUser(user.id);
  await deleteRestaurantByOwnerId(user.id);

  revalidatePath("/manage");
}
