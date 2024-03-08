import { getUser } from "@/utils/user";
import UserToolbar from "@/components/UserToolbar";
import { getRestaurantFromUser } from "@/services/restaurants";
import CreateRestaurant from "@/components/Forms/CreateRestaurant";
import { AnimatePresence, MotionArticle } from "@/components/Motion";
import ManageMenu from "@/components/Forms/ManageMenu";

export default async function Page() {
  const user = await getUser();
  const restaurant = await getRestaurantFromUser(user.id);

  return (
    <section>
      <UserToolbar user={user} />

      <AnimatePresence>
        {!restaurant && (
          <MotionArticle className="mt-4" exit={{ opacity: 0 }}>
            <header className="my-4 bg-amber-950 text-amber-50 p-4 rounded-md">
              <p className="text-center font-semibold">
                Hej där! Du har visst inte lagt in din restaurang ännu. Dags att
                göra det!
              </p>
            </header>

            <CreateRestaurant />
          </MotionArticle>
        )}

        <article className="mt-2">
          {restaurant && <ManageMenu restaurant={restaurant} />}
        </article>
      </AnimatePresence>
    </section>
  );
}

// <article className="mt-5">
//  <h2 className="text-zinc-900 font-bold uppercase mb-2">Restauranger</h2>
//  <ManageRestaurants />
// </article>
