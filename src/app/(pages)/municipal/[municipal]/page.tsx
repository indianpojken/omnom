"use client";

import { motion } from "framer-motion";

import RestaurantList from "@/components/RestaurantList";

import DaySelector from "@/components/Selectors/DaySelector";
import WeekSelector from "@/components/Selectors/WeekSelector";

import { getDatesFromDate } from "@/utils/dates";

export default function Page({ params }: { params: { municipal: string } }) {
  const municipal = decodeURIComponent(params.municipal);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col"
    >
      <header className="font-bold uppercase mb-2">{municipal}</header>

      <WeekSelector>
        {(date) => (
          <DaySelector dates={getDatesFromDate(date)}>
            {(day) => (
              <RestaurantList municipal={municipal} date={date} day={day} />
            )}
          </DaySelector>
        )}
      </WeekSelector>
    </motion.section>
  );
}
