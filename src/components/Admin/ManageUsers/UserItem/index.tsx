import { Icons } from "@/components/Icons";
import { User } from "@supabase/supabase-js";
import RemoveUser from "./RemoveUser";

export default function UserItem({ user }: { user: User }) {
  return (
    <section className="flex gap-2 bg-amber-100">
      <article className="text-amber-900 p-2 flex-1 flex flex-row gap-2 rounded-md">
        {Icons["person"]}
        <p>{user.email}</p>
      </article>

      <aside className="flex justify-center items-center px-4">
        <RemoveUser user={user} />
      </aside>
    </section>
  );
}
