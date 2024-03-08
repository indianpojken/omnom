"use client";

import { Suspense, useState } from "react";

import WeekSelector from "./WeekSelector";
import MenuEditor from "./MenuEditor";

import type { Restaurant } from "@/types";

export default function ManageMenu({ restaurant }: { restaurant: Restaurant }) {
  const [selectedDate, setSelectedDate] = useState<{
    year: number;
    week: number;
  }>();

  return (
    <article className="flex flex-col">
      <WeekSelector callback={(date) => setSelectedDate(date)} />

      {selectedDate && (
        <Suspense fallback={<p>Loading...</p>}>
          <MenuEditor restaurant={restaurant} date={selectedDate} />
        </Suspense>
      )}
    </article>
  );
}
