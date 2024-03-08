import { getMenuByRestaurantIdAndDate } from "@/services/menus";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(
  request: Request,
  { params }: { params: { restaurantId: string; date: string } }
) {
  const dateRegexp = /\d{0,4}-W\d{1,2}/;

  if (!params.date.match(dateRegexp)) {
    return Response.json({ error: "invalid date format." });
  }

  const parseDateString = (date: string) => ({
    year: Number(date.split("-W").at(0)),
    week: Number(date.split("-W").at(1)),
  });

  const menu = await getMenuByRestaurantIdAndDate(
    params.restaurantId,
    parseDateString(params.date)
  );

  return Response.json({ menu: menu?.data ?? {} });
}
