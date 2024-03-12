import Menu from "@/components/Menu";
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

  const currentDate = getCurrentDate();
  const dates = getDatesFromDate(getCurrentDate());

  return (
    <section>
      <header className="text-xl font-bold uppercase">
        {municipal} V. {currentDate.week} ({currentDate.year})
      </header>

      <Menu restaurants={restaurants} dates={dates} />
    </section>
  );
}
