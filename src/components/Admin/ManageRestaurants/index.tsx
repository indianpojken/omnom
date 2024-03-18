import Link from "next/link";

import { getAllRestaurants } from "@/services/restaurants";
import { icons } from "@/components/Icons";
import RemoveRestaurantButton from "./RemoveRestaurantButton";

export default async function ManageRestaurants() {
  const restaurants = await getAllRestaurants();

  return (
    <section>
      <header className="mb-2">
        <h2 className="text-zinc-900 font-bold uppercase">Restauranger</h2>
      </header>

      <ol className="flex flex-col gap-4">
        {restaurants.map((restaurant) => (
          <li
            key={`${restaurant.name}@${restaurant.municipal}`}
            className="flex flex-col sm:flex-row rounded-md bg-amber-50 overflow-hidden text-amber-900 border-b-2 border-amber-900"
          >
            <article className="flex-1">
              <Link
                className="flex items-center gap-2 p-2 transition-colors hover:bg-amber-100"
                href={`/restaurant/${restaurant.id}`}
              >
                {icons["restaurant"]}
                <p className="font-bold">{restaurant.name}</p>
              </Link>
            </article>

            <aside className="flex border-amber-200 border-t sm:border-0">
              <article className="flex flex-1 p-2 sm:flex-0 items-center gap-2 bg-amber-100 text-amber-900 border-r sm:border-x border-amber-200 px-2">
                {icons["location"]}

                <p>{restaurant.municipal}</p>
              </article>

              <section className="flex gap-4 bg-amber-100 px-4">
                <RemoveRestaurantButton restaurant={restaurant} />
              </section>
            </aside>
          </li>
        ))}
      </ol>
    </section>
  );
}
