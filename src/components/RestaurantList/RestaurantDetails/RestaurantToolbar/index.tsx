import Link from "next/link";

import { icons } from "@/components/Icons";
import { Restaurant } from "@/types";

export default function RestaurantToolbar({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  return (
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
  );
}
