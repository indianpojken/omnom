"use client";

import { motion } from "framer-motion";

import RestaurantList from "@/components/RestaurantList";

import DaySelector from "@/components/Selectors/DaySelector";
import WeekSelector from "@/components/Selectors/WeekSelector";

import { getDatesFromDate } from "@/utils/dates";
import { icons } from "@/components/Icons";

export default function Page({ params }: { params: { municipal: string } }) {
  const municipal = decodeURIComponent(params.municipal);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col"
    >
      <header className="flex gap-2 mb-2">
        {icons["location"]}
        <h2 className="font-bold uppercase"> {municipal}</h2>
      </header>

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
