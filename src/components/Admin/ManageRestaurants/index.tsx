import { getAllRestaurants } from "@/services/restaurants";
import { getAllUsers } from "@/utils/user";
import ManageRestaurantItem from "./ManageRestaurantItem";
import UserItem from "./UserItem";

export default async function ManageRestaurants() {
  const restaurants = await getAllRestaurants();
  const users = (await getAllUsers()).filter(
    (user) => user.user_metadata.role === "user"
  );

  const grouped = users.map((user) => ({
    ...user,
    restaurant: restaurants.find((restaurant) => restaurant.owner === user.id),
  }));

  return (
    <section>
      <header className="mb-2">
        <h2 className="text-zinc-900 font-bold uppercase">Restauranger</h2>
      </header>

      <ol className="flex flex-col gap-8">
        {grouped.map((user) => (
          <li key={`${user.email}`} className="flex flex-col gap-2 ">
            <UserItem user={user} />

            {user.restaurant ? (
              <ManageRestaurantItem restaurant={user.restaurant} />
            ) : (
              <p>Ingen restaurang skapad.</p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
