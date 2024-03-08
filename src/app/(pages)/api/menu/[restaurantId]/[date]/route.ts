import { getMenuByRestaurantIdAndDate } from "@/services/menus";
import { Date } from "@/types";

export const dynamic = "force-dynamic";

function parseDateString(date: string): Date {
  return {
    year: Number(date.split("-W").at(0)),
    week: Number(date.split("-W").at(1)),
  };
}

function validateDate(date: string): boolean {
  if (date.match(/\d{0,4}-W\d{1,2}/) && parseDateString(date).week <= 53) {
    return true;
  } else {
    return false;
  }
}

export async function GET(
  request: Request,
  { params }: { params: { restaurantId: string; date: string } }
) {
  const { restaurantId } = params;
  const date = parseDateString(params.date);

  if (validateDate(params.date)) {
    const menu = await getMenuByRestaurantIdAndDate(restaurantId, date);
    return Response.json({ menu: menu });
  } else {
    return Response.json({ error: "Invalid date." });
  }
}
