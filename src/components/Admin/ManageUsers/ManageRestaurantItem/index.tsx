import Link from "next/link";

import { Restaurant } from "@/types";
import { Icons } from "@/components/Icons";

import RemoveRestaurantButton from "./RemoveRestaurantButton";

export default function ManageRestaurantItem({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  return (
    <article className="flex flex-col sm:flex-row bg-amber-50 overflow-hidden text-amber-900 border-b-2 border-amber-900">
      <article className="flex-1">
        <Link
          className="flex items-center gap-2 p-2 transition-colors hover:bg-amber-100"
          href={`/restaurant/${restaurant.id}`}
        >
          {Icons["restaurant"]}
          <p className="font-bold">{restaurant.name}</p>
        </Link>
      </article>

      <aside className="flex border-amber-200 border-t sm:border-0 bg-amber-50 text-amber-900">
        <article className="flex flex-1 p-2 sm:flex-0 items-center gap-2 border-r sm:border-x border-amber-200 px-2">
          {Icons["location"]}

          <p>{restaurant.municipal}</p>
        </article>

        <section className="flex gap-4 px-4">
          <RemoveRestaurantButton restaurant={restaurant} />
        </section>
      </aside>
    </article>
  );
}
