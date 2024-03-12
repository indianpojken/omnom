import RestaurantList from "@/components/RestaurantList";
import { getRestaurantsWithMenu } from "@/services/menus";
import { getRestaurantsByMunicipal } from "@/services/restaurants";
import { getCurrentDate, getDatesFromDate, dayjs } from "@/utils/dates";

export default async function Page({
  params,
}: {
  params: { municipal: string };
}) {
  const municipal = decodeURIComponent(params.municipal);
  const restaurants = await getRestaurantsWithMenu(
    await getRestaurantsByMunicipal(municipal),
    getCurrentDate()
  );

  const dates = getDatesFromDate(getCurrentDate());

  return (
    <section>
      <header className="text-xl font-bold uppercase">{municipal}</header>

      <RestaurantList restaurants={restaurants} />
    </section>
  );
}
