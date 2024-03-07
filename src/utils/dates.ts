import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekday from "dayjs/plugin/weekday";
import dayjsLocaleSV from "dayjs/locale/sv";

dayjs.extend(weekOfYear);
dayjs.locale(dayjsLocaleSV);
dayjs.extend(weekday);

export function getCurrentWeek(): number {
  return dayjs().week();
}

export function getDayFromDate(date: string): string {
  return dayjs(date).format("dddd");
}

export function getDatesByYearAndWeek(year: number, week: number): string[] {
  const weekData = dayjs().year(year).week(week);
  const start = weekData.startOf("week");
  const end = weekData.endOf("week");

  return Array.from({ length: end.diff(start, "day") - 1 }, (_, index) =>
    start.add(index, "day").format("YYYY-MM-DD")
  );
}

export function getDatesFromWeek(week: number): string[] {
  return getDatesByYearAndWeek(dayjs().year(), 10);
}
