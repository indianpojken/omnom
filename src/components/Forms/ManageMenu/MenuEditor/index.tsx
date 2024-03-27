"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

import MenuField from "@/components/Form/MenuField";
import { getDatesFromDate, getDayFromDate } from "@/utils/dates";
import { getMenuByRestaurantIdAndDate } from "@/services/menus";
import { UpdateMenuAction } from "@/actions/menu";
import SubmitButton from "@/components/Form/SubmitButton";
import { Icons } from "@/components/Icons";
import { useData } from "@/hooks/useData";
import type { Date, Menu, Restaurant } from "@/types";

export default function MenuEditor({
  restaurant,
  date,
}: {
  restaurant: Restaurant;
  date: Date;
}) {
  const form = useForm<Menu>();

  const { data, isPending } = useData<Menu>(
    async () =>
      (await getMenuByRestaurantIdAndDate(restaurant.id, date))?.data as Menu,
    [date, restaurant.id]
  );

  useEffect(() => {
    const defaultData = getDatesFromDate(date).reduce(
      (previous, date) => ({ ...previous, [date]: { items: [] } }),
      {}
    );

    form.reset(data ?? defaultData);
  }, [data, date]);

  if (isPending) return <></>;

  return (
    <AnimatePresence>
      <motion.form
        key={`${date.year}-W${date.week}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col mt-4"
        action={() =>
          form.handleSubmit((data) => UpdateMenuAction(data, date))()
        }
      >
        <section className="flex flex-col gap-11">
          {getDatesFromDate(date).map((date) => (
            <section key={date} className="mb-4">
              <header className="mb-2 flex gap-2">
                {Icons["calendar"]}
                <h2 className="text-zinc-900 font-bold uppercase">
                  {getDayFromDate(date)}
                </h2>
              </header>

              <MenuField form={form} id={date} />
            </section>
          ))}
        </section>

        <SubmitButton className="p-4 mb-4">Spara</SubmitButton>
      </motion.form>
    </AnimatePresence>
  );
}
