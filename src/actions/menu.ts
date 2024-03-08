"use server";

import { revalidatePath } from "next/cache";

import { getUser } from "@/utils/user";
import { getRestaurantFromUser } from "@/services/restaurants";
import type { Menu, Date } from "@/types";
import { upsertMenu } from "@/services/menus";

export async function UpdateMenuAction(menu: Menu, date: Date) {
  const user = await getUser();
  const restaurant = await getRestaurantFromUser(user.id);

  if (user && user.id === restaurant?.owner) {
    await upsertMenu(restaurant, date, menu);
    revalidatePath("/manage");
  }
}
