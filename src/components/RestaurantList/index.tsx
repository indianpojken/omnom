"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useTransition } from "react";
import Link from "next/link";

import MenuItems from "../MenuItems";
import { getRestaurantsWithMenuFromMunicipal } from "@/services/restaurants";
import type { Date, RestaurantWithMenu } from "@/types";
import RestaurantDetails from "./RestaurantDetails";
import { icons } from "../Icons";

export default function RestaurantList({
  municipal,
  date,
  day,
}: {
  municipal: string;
  date: Date;
  day: string;
}) {
  const [data, setData] = useState<Array<RestaurantWithMenu> | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetcher = async () => {
      const restaurants = await getRestaurantsWithMenuFromMunicipal(
        municipal,
        date
      );

      setData(restaurants);
    };

    startTransition(() => fetcher());
  }, [day]);

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
              {icons["restaurant"]}

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
