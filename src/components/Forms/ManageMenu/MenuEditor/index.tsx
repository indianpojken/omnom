"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import useSWR from "swr";

import MenuField from "@/components/Form/MenuField";
import { getDatesByYearAndWeek, getDayFromDate } from "@/utils/dates";
import { UpdateMenuAction } from "@/actions/menu";

import type { Date, Menu, Restaurant } from "@/types";
import SubmitButton from "@/components/Form/SubmitButton";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function MenuEditor({
  restaurant,
  date,
}: {
  restaurant: Restaurant;
  date: Date;
}) {
  const form = useForm<Menu>();
  const { data, error, isLoading } = useSWR(
    `/api/menu/${restaurant.id}/${date.year}-W${date.week}`,
    fetcher
  );

  useEffect(() => form.reset(data?.menu), [form, data, date]);

  if (isLoading) return <></>;

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

        <SubmitButton className="p-4">Spara</SubmitButton>
      </motion.form>
    </AnimatePresence>
  );
}
