import { getUser } from "@/utils/user";
import UserToolbar from "@/components/UserToolbar";
import ManageRestaurants from "@/components/ManageRestaurants";
import { getAllRestaurantsFromUser } from "@/services/restaurants";
import CreateRestaurant from "@/components/Forms/CreateRestaurant";

export default async function Page() {
  const user = await getUser();
  // const restaurants = await getAllRestaurantsFromUser(user.id);
  const restaurants = [];
  console.log(user);
  // console.log(restaurants);

  return (
    <section>
      <UserToolbar user={user} />

      {restaurants.length === 0 && (
        <article className="mt-4">
          <header className="my-4 bg-amber-950 text-amber-50 p-4 rounded-md">
            <p className="text-center font-semibold">
              Hej där! Du har visst inte lagt in din restaurang ännu. Dags att
              göra det!
            </p>
          </header>

          <CreateRestaurant />
        </article>
      )}
    </section>
  );
}

// <article className="mt-5">
//  <h2 className="text-zinc-900 font-bold uppercase mb-2">Restauranger</h2>
//  <ManageRestaurants />
// </article>
