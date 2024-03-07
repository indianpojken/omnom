import { useEffect, useState } from "react";
import { icons } from "@/components/Form/icons";

import { dayjs } from "@/utils/dates";

type Date = {
  year: number;
  week: number;
};

export default function WeekSelector({
  callback,
}: {
  callback: (date: Date) => void;
}) {
  const [date, setDate] = useState({
    year: dayjs().year(),
    week: dayjs().week(),
  });

  useEffect(() => callback(date), [date, callback]);

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
    "px-4 py-2 hover:bg-amber-900 hover:text-amber-100 transition-colors";

  return (
    <article className="overflow-hidden flex mx-auto bg-amber-200 border-b-2 border-amber-900 rounded-md">
      <button className={buttonStyle} onClick={() => decrement()}>
        {icons["arrowLeft"]}
      </button>

      <section className="flex gap-4 bg-amber-100 text-amber-950 px-4 justify-items-center items-center">
        <p className="font-semibold">{date.year}</p>
        <p className="font-semibold">V{date.week}</p>
      </section>

      <button className={buttonStyle} onClick={() => increment()}>
        {icons["arrowRight"]}
      </button>
    </article>
  );
}
