"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import type { Menu } from "@/types";
import MenuField from "@/components/Form/MenuField";
import { getDayFromDate } from "@/utils/dates";
import { TestAction } from "@/actions/test";
import WeekSelector from "./WeekSelector";

export default function ManageMenu({ dates }: { dates: string[] }) {
  const [selectedDate, setSelectedDate] = useState<{
    year: number;
    week: number;
  }>();

  const data = dates.reduce(
    (previous, date) => ({
      ...previous,
      [date]: { items: [{ food: "", vegetarian: false, allergies: [] }] },
    }),
    {}
  );

  const form = useForm<Menu>({
    defaultValues: data,
  });

  return (
    <article className="flex flex-col">
      <WeekSelector callback={(date) => setSelectedDate(date)} />

      <p>
        {selectedDate?.year} {selectedDate?.week}
      </p>
      <form
        className="flex flex-col items-start"
        action={() => form.handleSubmit((data) => TestAction(data))()}
      >
        {dates.map((date) => (
          <section key={date} className="mb-4">
            <header className="mb-2">
              <h2 className="text-zinc-900 font-bold uppercase">
                {getDayFromDate(date)}
              </h2>
            </header>

            <MenuField form={form} id={date} />
          </section>
        ))}

        <input type="submit" />
      </form>
    </article>
  );
}
