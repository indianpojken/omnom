"use server";

import { revalidatePath } from "next/cache";

import { getUser } from "@/utils/user";
import { getRestaurantFromUser } from "@/services/restaurants";
import { getMenuByRestaurantIdAndDate, upsertMenu } from "@/services/menus";
import type { Menu, Date, Restaurant, MenuEntry } from "@/types";

export async function UpdateMenuAction(menu: Menu, yearAndWeek: Date) {
  const user = await getUser();
  const restaurant = await getRestaurantFromUser(user.id);

  if (user && user.id === restaurant?.owner) {
    await upsertMenu(restaurant, yearAndWeek, menu);
    revalidatePath("/manage");
  }
}

export async function GetMenuAction(
  restaurantId: Restaurant["id"],
  date: Date
): Promise<MenuEntry> {
  return (await getMenuByRestaurantIdAndDate(restaurantId, date)) as MenuEntry;
}
