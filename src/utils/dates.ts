import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekday from "dayjs/plugin/weekday";
import dayjsLocaleSV from "dayjs/locale/sv";
import type { Date } from "@/types";

dayjs.extend(weekOfYear);
dayjs.locale(dayjsLocaleSV);
dayjs.extend(weekday);

export function getDayFromDate(date: string): string {
  return dayjs(date).format("dddd");
}

export function getDatesFromDate(date: Date): string[] {
  const weekData = dayjs().year(date.year).week(date.week);
  const start = weekData.startOf("week");
  const end = weekData.endOf("week");

  return Array.from({ length: end.diff(start, "day") - 1 }, (_, index) =>
    start.add(index, "day").format("YYYY-MM-DD")
  );
}

export function getDatesFromWeek(week: number): string[] {
  return getDatesFromDate({ year: dayjs().year(), week });
}

export function formatDate(date: Date) {
  return `${date.year}-W${date.week}`;
}

export function getCurrentDate(): Date {
  return {
    year: dayjs().year(),
    week: dayjs().week(),
  };
}

export { dayjs };
