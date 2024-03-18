"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { icons } from "@/components/Icons";
import { dayjs } from "@/utils/dates";
import type { Date } from "@/types";

export default function WeekSelector({
  children,
}: {
  children: (date: Date) => React.ReactNode;
}) {
  const [date, setDate] = useState({
    year: dayjs().year(),
    week: dayjs().week(),
  });

  const increment = () => {
    const incremented = dayjs().year(date.year).week(date.week).add(1, "week");

    setDate({
      year: incremented.year(),
      week: incremented.week(),
    });
  };

  const decrement = () => {
    const decrement = dayjs()
      .year(date.year)
      .week(date.week)
      .subtract(1, "week");

    setDate({
      year: decrement.year(),
      week: decrement.week(),
    });
  };

  const buttonStyle =
    "flex flex-1 justify-center px-4 py-2 hover:bg-amber-900 active:bg-amber-950 hover:text-amber-100 transition-colors";

  return (
    <>
      <motion.article
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="overflow-hidden flex bg-amber-200 border-b-2 border-amber-900 rounded-md"
      >
        <button className={buttonStyle} onClick={() => decrement()}>
          {icons["arrowLeft"]}
        </button>

        <section className="flex gap-4 bg-amber-100 flex-1 justify-center text-amber-950 px-4 justify-items-center items-center">
          <p className="font-semibold">{date.year}</p>
          <p className="font-semibold">V{date.week}</p>
        </section>

        <button className={buttonStyle} onClick={() => increment()}>
          {icons["arrowRight"]}
        </button>
      </motion.article>

      {children(date)}
    </>
  );
}
