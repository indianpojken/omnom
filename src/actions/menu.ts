"use server";

import { revalidatePath } from "next/cache";

import { getUser } from "@/utils/user";
import { getRestaurantFromUser } from "@/services/restaurants";
import { upsertMenu } from "@/services/menus";
import type { Menu, Date } from "@/types";

export async function UpdateMenuAction(menu: Menu, yearAndWeek: Date) {
  const user = await getUser();
  const restaurant = await getRestaurantFromUser(user.id);

  if (user && user.id === restaurant?.owner) {
    await upsertMenu(restaurant, yearAndWeek, menu);
    // revalidatePath("/manage");
  }
}
