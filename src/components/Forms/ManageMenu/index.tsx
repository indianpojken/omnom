"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import MenuField from "@/components/Form/MenuField";
import {
  formatYearAndWeek,
  getDatesByYearAndWeek,
  getDayFromDate,
} from "@/utils/dates";
import { UpdateMenuAction } from "@/actions/menu";
import WeekSelector from "./WeekSelector";

import type { Menu, Restaurant } from "@/types";

async function fetcher() {}

export default function ManageMenu({ restaurant }: { restaurant: Restaurant }) {
  const [selectedDate, setSelectedDate] = useState<{
    year: number;
    week: number;
  }>();
  const form = useForm<Menu>();

  useEffect(() => {
    const fetcher = async () => {
      if (selectedDate) {
        const response = await fetch(
          `/api/menu/${restaurant.id}/${formatYearAndWeek(selectedDate)}`
        );
        const data = await response.json();
        form.reset(data.menu);
      }
    };

    fetcher();
  }, [selectedDate, restaurant, form]);

  return (
    <article className="flex flex-col">
      <WeekSelector callback={(date) => setSelectedDate(date)} />

      {selectedDate && (
        <form
          className="flex flex-col items-start"
          action={() =>
            form.handleSubmit((data) => UpdateMenuAction(data, selectedDate))()
          }
        >
          {getDatesByYearAndWeek(selectedDate.year, selectedDate.week).map(
            (date) => (
              <section key={date} className="mb-4">
                <header className="mb-2">
                  <h2 className="text-zinc-900 font-bold uppercase">
                    {getDayFromDate(date)}
                  </h2>
                </header>

                <MenuField form={form} id={date} />
              </section>
            )
          )}

          <input type="submit" />
        </form>
      )}
    </article>
  );
}
