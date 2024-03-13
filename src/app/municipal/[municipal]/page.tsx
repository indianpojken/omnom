import Menu from "@/components/Menu";
import { getRestaurantsByMunicipal } from "@/services/restaurants";

export default async function Page({
  params,
}: {
  params: { municipal: string };
}) {
  const municipal = decodeURIComponent(params.municipal);
  const restaurants = await getRestaurantsByMunicipal(municipal);

  return (
    <section className="flex flex-col">
      <header className="text-xl font-bold uppercase mb-2">{municipal}</header>

      <Menu restaurants={restaurants} />
    </section>
  );
}
