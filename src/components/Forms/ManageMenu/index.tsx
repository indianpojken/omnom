"use client";

import WeekSelector from "@/components/Selectors/WeekSelector";
import MenuEditor from "./MenuEditor";

import type { Restaurant } from "@/types";

export default function ManageMenu({ restaurant }: { restaurant: Restaurant }) {
  return (
    <article className="flex flex-col">
      <WeekSelector>
        {(date) => <MenuEditor restaurant={restaurant} date={date} />}
      </WeekSelector>
    </article>
  );
}
