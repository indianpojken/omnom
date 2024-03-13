"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { icons } from "@/components/Icons";
import { getCurrentDate } from "@/utils/dates";
import MenuItems from "./MenuItems";
import type { Menu, Restaurant, Date } from "@/types";
import { getRestaurantsWithMenu } from "@/services/menus";

export default function RestaurantList({
  restaurants,
  date,
  day,
}: {
  restaurants: Restaurant[];
  date?: Date;
  day: string;
}) {
  const [data, setData] = useState<Array<Restaurant & { menu: Menu }> | null>(
    null
  );

  useEffect(() => {
    const fetcher = async () => {
      const restaurantsWithMenu = await getRestaurantsWithMenu(
        restaurants,
        date ?? getCurrentDate()
      );

      setData(
        restaurantsWithMenu.sort((a, b) =>
          a.name[0].toUpperCase().localeCompare(b.name[0].toUpperCase())
        )
      );
    };

    fetcher();
  }, [day]);

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

          <section className="flex my-2 gap-2 sm:gap-4 flex-col sm:flex-row">
            <section className="p-2 flex-1 flex flex-row flex-wrap bg-amber-100 px-2 rounded-md justify-between">
              <article className="flex gap-2 text-amber-900">
                <aside>{icons["clock"]}</aside>
                <p className="text-amber-950">{restaurant.lunchHoursOpening}</p>
                <p>-</p>
                <p className="text-amber-950">{restaurant.lunchHoursClosing}</p>
              </article>

              <article className="flex gap-2 text-amber-900">
                <p className="text-amber-950">{restaurant.price}</p>
                <aside className="font-bold">SEK</aside>
              </article>
            </section>

            <section className="flex flex-0 gap-4 justify-around sm:justify-normal bg-amber-100 sm:bg-white rounded-md">
              {restaurant.website && (
                <Link
                  className="transition-colors text-amber-900 hover:text-amber-100 bg-amber-100 hover:bg-amber-950 p-2 rounded-md"
                  href={`http://${restaurant.website}`}
                >
                  {icons["url"]}
                </Link>
              )}

              {restaurant.phoneNumber && (
                <Link
                  className="transition-colors text-amber-900 hover:text-amber-100 bg-amber-100 hover:bg-amber-950 p-2 rounded-md"
                  href={`tel:${restaurant.phoneNumber}`}
                >
                  {icons["phone"]}
                </Link>
              )}

              <Link
                className="transition-colors text-amber-900 hover:text-amber-100 bg-amber-100 hover:bg-amber-950 p-2 rounded-md"
                href={`https://www.google.com/maps/search/?api=1&query=${restaurant.address.replaceAll(
                  " ",
                  "+"
                )},+${restaurant.zipCode},+${restaurant.municipal}`}
              >
                {icons["location"]}
              </Link>
            </section>
          </section>

          {Object.keys(restaurant.menu).includes(day) && (
            <>
              {restaurant.menu[day].items.length ? (
                <MenuItems items={restaurant.menu[day].items} />
              ) : (
                <p>Här var det tomt...</p>
              )}
            </>
          )}
        </article>
      ))}
    </motion.section>
  );
}
