import { getRestaurantsByMunicipal } from "@/services/restaurants";

export default async function Page({
  params,
}: {
  params: { municipal: string };
}) {
  // const invite = await getInviteById(params.invite);
  const municipal = decodeURIComponent(params.municipal);
  const restaurants = await getRestaurantsByMunicipal(municipal);

  return (
    <section>
      <article className="w-96 gap-4">{municipal}</article>
      <article>
        {restaurants.map((restaurant) => (
          <article key={restaurant.id}>
            <p>{restaurant.name}</p>
            <p>{restaurant.address}</p>
          </article>
        ))}
      </article>
    </section>
  );
}
