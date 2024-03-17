"use client";

import DaySelector from "@/components/Menu/DaySelector";
import RestaurantList from "@/components/RestaurantList";
import { getDatesFromDate } from "@/utils/dates";
import type { Menu, Restaurant } from "@/types";
import WeekSelector from "../WeekSelector";

export default function Menu({ municipal }: { municipal: string }) {
  return (
    <>
      <WeekSelector>
        {(date) => (
          <DaySelector dates={getDatesFromDate(date)}>
            {(day) => (
              <RestaurantList municipal={municipal} date={date} day={day} />
            )}
          </DaySelector>
        )}
      </WeekSelector>
    </>
  );
}
