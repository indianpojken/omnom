"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import MenuItems from "../MenuItems";
import { getRestaurantsWithMenuFromMunicipal } from "@/services/restaurants";
import RestaurantDetails from "./RestaurantDetails";
import { Icons } from "../Icons";
import { useData } from "@/hooks/useData";
import type { Date, RestaurantWithMenu } from "@/types";

export default function RestaurantList({
  municipal,
  date,
  day,
}: {
  municipal: string;
  date: Date;
  day: string;
}) {
  const { data, isPending } = useData<RestaurantWithMenu[]>(
    async () => await getRestaurantsWithMenuFromMunicipal(municipal, date),
    [day]
  );

  if (isPending) return <></>;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-10 mt-4"
      key={day}
    >
      {data?.map((restaurant) => (
        <article className="flex flex-col" key={restaurant.id}>
          <header className="flex items-end flex-row">
            <Link
              href={`/restaurant/${restaurant.id}`}
              className="flex gap-2 text-zinc-900 hover:text-amber-800 transition-colors"
            >
              {Icons["restaurant"]}

              <h2 className=" font-bold uppercase">{restaurant.name}</h2>
            </Link>
          </header>

          <RestaurantDetails restaurant={restaurant} />

          {Object.keys(restaurant.menu ?? {}).includes(day) &&
          restaurant.menu[day].items.length > 0 ? (
            <MenuItems items={restaurant.menu[day].items} />
          ) : (
            <p>Här var det tomt...</p>
          )}
        </article>
      ))}
    </motion.section>
  );
}
