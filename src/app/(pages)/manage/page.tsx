import { getUser } from "@/utils/user";
import UserToolbar from "@/components/UserToolbar";
import { getRestaurantFromUser } from "@/services/restaurants";
import EditRestaurant from "@/components/Forms/EditRestaurant";
import { AnimatePresence, MotionArticle } from "@/components/Motion";
import ManageMenu from "@/components/Forms/ManageMenu";
import ManageRestaurants from "@/components/ManageRestaurants";

export default async function Page() {
  const user = await getUser();
  const restaurant = await getRestaurantFromUser(user.id);

  const { role } = user.user_metadata;

  return (
    <section className="min-h-[calc(100vh+1px)]">
      <UserToolbar user={user} restaurant={restaurant} />
      {role === "admin" ? (
        <section className="mt-4">
          <ManageRestaurants />
        </section>
      ) : (
        <>
          <AnimatePresence>
            {!restaurant && (
              <MotionArticle
                key="section"
                className="mt-4"
                exit={{ opacity: 0 }}
              >
                <header className="my-4 bg-amber-950 text-amber-50 p-4 rounded-md">
                  <p className="text-center font-semibold">
                    Hej där! Du har visst inte lagt in din restaurang ännu. Dags
                    att göra det!
                  </p>
                </header>

                <EditRestaurant />
              </MotionArticle>
            )}

            <article className="mt-4">
              {restaurant && <ManageMenu restaurant={restaurant} />}
            </article>
          </AnimatePresence>
        </>
      )}
    </section>
  );
}
