"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import MenuField from "@/components/Form/MenuField";
import { getDatesByYearAndWeek, getDayFromDate } from "@/utils/dates";
import { GetMenuAction, UpdateMenuAction } from "@/actions/menu";

import type { Date, Menu, Restaurant } from "@/types";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function MenuEditor({
  restaurant,
  date,
}: {
  restaurant: Restaurant;
  date: Date;
}) {
  const form = useForm<Menu>();
  const data = useSWR(fetcher);

  useEffect(() => {
    const fetcher = async () => {
      const menu = await GetMenuAction(restaurant.id, date);

      if (menu) {
        form.reset(menu.data);
      } else {
        form.reset(
          getDatesByYearAndWeek(date.year, date.week).reduce(
            (previous, date) => ({
              ...previous,
              [date]: {
                items: [{ food: "", vegetarian: false, allergies: [] }],
              },
            }),
            {}
          )
        );
      }
    };

    fetcher();
  }, [date]);

  return (
    <form
      className="flex flex-col"
      action={() => form.handleSubmit((data) => UpdateMenuAction(data, date))()}
    >
      <section className="flex flex-col gap-11">
        {getDatesByYearAndWeek(date.year, date.week).map((date) => (
          <section key={date} className="mb-4">
            <header className="mb-2">
              <h2 className="text-zinc-900 font-bold uppercase">
                {getDayFromDate(date)}
              </h2>
            </header>

            <MenuField form={form} id={date} />
          </section>
        ))}
      </section>

      <input type="submit" />
    </form>
  );
}
