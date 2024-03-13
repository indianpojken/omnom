"use client";

import WeekSelector from "../../WeekSelector";
import MenuEditor from "./MenuEditor";

import type { Restaurant } from "@/types";

export default function ManageMenu({ restaurant }: { restaurant: Restaurant }) {
  return (
    <article className="flex flex-col">
      <WeekSelector style="center">
        {(date) => <MenuEditor restaurant={restaurant} date={date} />}
      </WeekSelector>
    </article>
  );
}
