import { icons } from "@/components/Form/icons";
import { getRestaurantsWithMenu } from "@/services/menus";
import { getRestaurantsByMunicipal } from "@/services/restaurants";
import { getCurrentDate, getDatesFromDate, dayjs } from "@/utils/dates";
import Link from "next/link";

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

      <section className="flex flex-col gap-10">
        {restaurants.map((restaurant) => (
          <article className="flex flex-col" key={restaurant.id}>
            <header className="flex justify-between sm:items-end flex-col sm:flex-row">
              <h2 className="flex-1 text-zinc-900 font-bold uppercase">
                {restaurant.name}
              </h2>

              <section className="flex flex-0 gap-4 justify-between sm:justify-normal">
                {restaurant.website && (
                  <Link
                    className="transition-colors text-amber-900 hover:text-amber-100 bg-amber-50 hover:bg-amber-950 p-2 rounded-md"
                    href={`http://${restaurant.website}`}
                  >
                    {icons["url"]}
                  </Link>
                )}

                {restaurant.phoneNumber && (
                  <Link
                    className="transition-colors text-amber-900 hover:text-amber-100 bg-amber-50 hover:bg-amber-950 p-2 rounded-md"
                    href={`tel:${restaurant.phoneNumber}`}
                  >
                    {icons["phone"]}
                  </Link>
                )}

                <Link
                  className="transition-colors text-amber-900 hover:text-amber-100 bg-amber-50 hover:bg-amber-950 p-2 rounded-md"
                  href={`https://www.google.com/maps/search/?api=1&query=${restaurant.address.replaceAll(
                    " ",
                    "+"
                  )},+${restaurant.zipCode},+${restaurant.municipal}`}
                >
                  {icons["location"]}
                </Link>
              </section>
            </header>

            <section className="flex flex-row flex-wrap bg-amber-100 p-2 rounded-md mt-2 mb-2 justify-between">
              <article className="flex gap-2 text-amber-900">
                <aside>{icons["clock"]}</aside>
                <p className="text-amber-950">{restaurant.lunchHoursOpening}</p>
                <p>-</p>
                <p className="text-amber-950">{restaurant.lunchHoursClosing}</p>
              </article>

              <article className="flex gap-2 text-amber-900">
                <p className="text-amber-950">{restaurant.price}</p>
                <aside className="font-bold">SEK</aside>
              </article>
            </section>

            <section className="flex flex-col gap-4">
              {restaurant.menu[dayjs().format("YYYY-MM-DD")].items.map(
                (item) => (
                  <article className="flex flex-col gap-2" key={item.food}>
                    <section className="flex gap-4">
                      <article className="flex flex-1 items-center bg-amber-50 border-amber-900 rounded-md overflow-hidden border-b-2">
                        <aside className="p-2 flex text-amber-900 bg-amber-100">
                          {icons["food"]}
                        </aside>

                        <p className="text-amber-950 px-2">{item.food}</p>
                      </article>
                    </section>

                    {(item.allergies.length || item.vegetarian) && (
                      <ol className="flex gap-2 flex-wrap">
                        {item.vegetarian && (
                          <p className="justify-center select-none items-center flex text-nowrap p-2 rounded-md text-xs uppercase font-semibold bg-green-300 text-green-900 p border-b-2 border-green-900">
                            Vegetarisk
                          </p>
                        )}

                        {item.allergies.map((allergy) => (
                          <li
                            key={allergy}
                            className="flex-0 justify-center flex transition-colors select-none p-2 rounded-md text-xs uppercase font-semibold bg-amber-200 text-amber-900 border-b-2 border-amber-900"
                          >
                            {allergy}
                          </li>
                        ))}
                      </ol>
                    )}
                  </article>
                )
              )}
            </section>
          </article>
        ))}
      </section>
    </section>
  );
}
