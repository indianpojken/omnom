import { getUser } from "@/utils/user";
import UserToolbar from "@/components/UserToolbar";
import ManageRestaurants from "@/components/ManageRestaurants";

export default async function Page() {
  const user = await getUser();

  console.log(user);

  return (
    <section>
      <UserToolbar user={user} />

      <article className="mt-5">
        <h2 className="text-zinc-900 font-bold uppercase mb-2">Restauranger</h2>
        <ManageRestaurants />
      </article>
    </section>
  );
}
