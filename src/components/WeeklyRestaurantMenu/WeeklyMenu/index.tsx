"use client";

import { motion } from "framer-motion";

import MenuItems from "@/components/MenuItems";
import { Date, Menu, Restaurant } from "@/types";
import { getMenuByRestaurantIdAndDate } from "@/services/menus";
import { getDatesFromDate, getDayFromDate } from "@/utils/dates";
import { Icons } from "@/components/Icons";
import { useData } from "@/hooks/useData";

export function WeeklyMenu({
  restaurantId,
  date,
}: {
  restaurantId: Restaurant["id"];
  date: Date;
}) {
  const { data: menu, isPending } = useData<Menu>(
    async () =>
      (await getMenuByRestaurantIdAndDate(restaurantId, date))?.data as Menu,
    [date]
  );

  if (isPending) return <></>;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-11 mt-4"
    >
      {getDatesFromDate(date).map((day) => (
        <article key={day}>
          <header className="mb-2 flex gap-2">
            {Icons["calendar"]}

            <h2 className="text-zinc-900 font-bold uppercase">
              {getDayFromDate(day)}
            </h2>
          </header>

          {menu &&
          Object.keys(menu ?? {}).includes(day) &&
          menu[day].items.length > 0 ? (
            <MenuItems items={menu[day].items} />
          ) : (
            <p>Här var det tomt...</p>
          )}
        </article>
      ))}
    </motion.section>
  );
}
