import { getUser } from "@/utils/user";
import UserToolbar from "@/components/UserToolbar";
import ManageRestaurants from "@/components/ManageRestaurants";
import Button from "@/components/Button";

export default async function Page() {
  const user = await getUser();

  console.log(user);

  return (
    <section>
      <UserToolbar user={user} />

      <article className="mt-5">
        <h2 className="text-zinc-900 font-bold uppercase mb-2">Restauranger</h2>
        <ManageRestaurants />
        <Button
          title="Lägg till restaurang"
          className="flex text-base font-bold ml-auto mt-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </article>
    </section>
  );
}
