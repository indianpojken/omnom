"use client";

import DaySelector from "@/components/Menu/DaySelector";
import RestaurantList from "@/components/RestaurantList";
import { dayjs } from "@/utils/dates";
import type { Menu, Restaurant } from "@/types";

export default function Menu({
  dates,
  restaurants,
}: {
  dates: string[];
  restaurants: Array<Restaurant & { menu: Menu }>;
}) {
  return (
    <>
      <DaySelector dates={dates}>
        {(date) => <RestaurantList restaurants={restaurants} date={date} />}
      </DaySelector>
    </>
  );
}
