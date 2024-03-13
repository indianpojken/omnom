"use client";

import { removeRestaurantAction } from "@/actions/restaurant";
import { icons } from "@/components/Icons";
import { Restaurant } from "@/types";

export default function RemoveRestaurantButton({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  return (
    <button
      title="Ta bort"
      className="text-amber-900 hover:text-amber-600 duration-500 transition-colors"
      onClick={() => removeRestaurantAction(restaurant.id)}
    >
      {icons["removeSolid"]}
    </button>
  );
}
