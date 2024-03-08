import { and, eq } from "drizzle-orm";

import { database } from "@/services/database";
import { menus } from "@/schemas/menus";
import { formatYearAndWeek } from "@/utils/dates";

import { Menu, Restaurant, Date, MenuEntry } from "@/types";

export async function getMenuByRestaurantIdAndDate(
  restaurantId: Restaurant["id"],
  date: Date
): Promise<MenuEntry | undefined> {
  const menu = await database.query.menus.findFirst({
    where: and(
      eq(menus.restaurant, restaurantId),
      eq(menus.yearAndWeek, formatYearAndWeek(date))
    ),
  });

  return menu ?? undefined;
}

export async function upsertMenu(
  restaurant: Restaurant,
  date: Date,
  data: Menu
): Promise<MenuEntry> {
  const oldMenu = await getMenuByRestaurantIdAndDate(restaurant.id, date);

  const [menu] = await database
    .insert(menus)
    .values({
      ...(oldMenu && { id: oldMenu.id }),
      data,
      restaurant: restaurant.id,
      yearAndWeek: `${date.year}-W${date.week}`,
    })
    .onConflictDoUpdate({ target: menus.id, set: { data } })
    .returning();

  return menu;
}
