"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { dayjs, getDayFromDate } from "@/utils/dates";

export default function DaySelector({
  dates,
  children,
}: {
  dates: string[];
  children: (date: string) => React.ReactNode;
}) {
  const [selectedDate, setSelectedDate] = useState(
    dates.includes(dayjs().format("YYYY-MM-DD"))
      ? dayjs().format("YYYY-MM-DD")
      : dates[0]
  );

  return (
    <>
      <ol className="flex flex-wrap gap-2 justify-between my-4">
        {dates.map((date, index) => (
          <li className="flex flex-1" key={date}>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.07 * index }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedDate(date)}
              disabled={date === selectedDate}
              className="flex-1 border-b-2 border-amber-900 select-none transition-colors uppercase font-bold text-amber-900 hover:text-amber-100 bg-amber-100 disabled:bg-amber-950 disabled:text-amber-100 hover:bg-amber-950 p-2 rounded-md"
            >
              {getDayFromDate(date)}
            </motion.button>
          </li>
        ))}
      </ol>

      {children(selectedDate)}
    </>
  );
}
