import { getAllRestaurants } from "@/services/restaurants";
import ManageRestaurantItem from "./ManageRestaurantItem";

export default async function ManageRestaurants() {
  const restaurants = await getAllRestaurants();

  return (
    <section>
      <header className="mb-2">
        <h2 className="text-zinc-900 font-bold uppercase">Restauranger</h2>
      </header>

      <ol className="flex flex-col gap-4">
        {restaurants.map((restaurant) => (
          <li key={`${restaurant.name}@${restaurant.municipal}`}>
            <ManageRestaurantItem restaurant={restaurant} />
          </li>
        ))}
      </ol>
    </section>
  );
}
