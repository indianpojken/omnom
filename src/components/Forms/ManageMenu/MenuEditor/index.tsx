"use client";

import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

import MenuField from "@/components/Form/MenuField";
import { getDatesFromDate, getDayFromDate } from "@/utils/dates";
import { getMenuByRestaurantIdAndDate } from "@/services/menus";
import { UpdateMenuAction } from "@/actions/menu";

import type { Date, Menu, Restaurant } from "@/types";
import SubmitButton from "@/components/Form/SubmitButton";

export default function MenuEditor({
  restaurant,
  date,
}: {
  restaurant: Restaurant;
  date: Date;
}) {
  const form = useForm<Menu>();

  const [data, setData] = useState<Menu>();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetcher = async () => {
      const menu = await getMenuByRestaurantIdAndDate(restaurant.id, date);
      setData(menu?.data as Menu);
    };

    startTransition(() => fetcher());
  }, [date, restaurant.id]);

  useEffect(() => form.reset(data), [data, date]);

  if (isPending) return <></>;

  return (
    <AnimatePresence>
      <motion.form
        key={`${date.year}-W${date.week}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col"
        action={() =>
          form.handleSubmit((data) => UpdateMenuAction(data, date))()
        }
      >
        <section className="flex flex-col gap-11">
          {getDatesFromDate(date).map((date) => (
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

        <SubmitButton className="p-4 mb-4">Spara</SubmitButton>
      </motion.form>
    </AnimatePresence>
  );
}
