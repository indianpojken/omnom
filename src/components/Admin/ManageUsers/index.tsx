import { getAllRestaurants } from "@/services/restaurants";
import { getAllUsers } from "@/utils/user";
import ManageRestaurantItem from "./ManageRestaurantItem";
import UserItem from "./UserItem";

export default async function ManageUsers() {
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
        <h2 className="text-zinc-900 font-bold uppercase">Användare</h2>
      </header>

      <ol className="flex flex-col gap-8">
        {grouped.map((user) => (
          <li
            key={`${user.email}`}
            className="flex flex-col bg rounded-md overflow-hidden"
          >
            <UserItem user={user} />

            {user.restaurant && (
              <article className="border-t border-amber-200">
                <ManageRestaurantItem restaurant={user.restaurant} />
              </article>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
