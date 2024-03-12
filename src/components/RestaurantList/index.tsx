import Link from "next/link";

import { icons } from "@/components/Form/icons";
import { dayjs } from "@/utils/dates";
import type { Menu, Restaurant } from "@/types";
import MenuItems from "./MenuItems";

export default function RestaurantList({
  restaurants,
}: {
  restaurants: Array<Restaurant & { menu: Menu }>;
}) {
  return (
    <section className="flex flex-col gap-10">
      {restaurants.map((restaurant) => (
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

            <section className="flex flex-0 gap-4 justify-around sm:justify-normal">
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

          <MenuItems
            items={restaurant.menu[dayjs().format("YYYY-MM-DD")].items}
          />
        </article>
      ))}
    </section>
  );
}
