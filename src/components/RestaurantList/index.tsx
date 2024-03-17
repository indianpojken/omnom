"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useTransition } from "react";

import MenuItems from "./MenuItems";
import { getRestaurantsWithMenuFromMunicipal } from "@/services/restaurants";
import type { Date, RestaurantWithMenu } from "@/types";
import RestaurantDetails from "./RestaurantDetails";

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
          <header className="flex justify-between items-end flex-row">
            <h2 className="text-zinc-900 font-bold uppercase">
              {restaurant.name}
            </h2>
          </header>

          <RestaurantDetails restaurant={restaurant} />

          {Object.keys(restaurant.menu ?? {}).includes(day) ? (
            <MenuItems items={restaurant.menu[day].items} />
          ) : (
            <p>Här var det tomt...</p>
          )}
        </article>
      ))}
    </motion.section>
  );
}
