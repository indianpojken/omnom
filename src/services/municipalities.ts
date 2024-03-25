import type { Municipalities } from "@/types";
import { getAllRestaurants } from "./restaurants";

export function groupMunicipalitiesByInitial(municipalities: Municipalities) {
  return municipalities.reduce(
    (previous: Record<string, string[]>, municipal) => {
      if (!previous[municipal[0]]?.includes(municipal)) {
        return {
          ...previous,
          [municipal[0]]: [...(previous[municipal[0]] ?? []), municipal],
        };
      } else {
        return previous;
      }
    },
    {}
  );
}

export async function getAllMunicipalitiesWithRestaurants() {
  const restaurants = await getAllRestaurants();
  return restaurants.map((restaurant) => restaurant.municipal);
}
