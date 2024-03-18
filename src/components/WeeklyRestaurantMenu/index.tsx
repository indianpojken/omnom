"use client";

import WeekSelector from "@/components/Selectors/WeekSelector";
import { Restaurant } from "@/types";
import { WeeklyMenu } from "./WeeklyMenu";

export function WeeklyRestaurantMenu({
  restaurantId,
}: {
  restaurantId: Restaurant["id"];
}) {
  return (
    <WeekSelector>
      {(date) => <WeeklyMenu restaurantId={restaurantId} date={date} />}
    </WeekSelector>
  );
}
