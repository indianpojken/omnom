import { Icons } from "@/components/Icons";
import { User } from "@supabase/supabase-js";

export default function UserItem({ user }: { user: User }) {
  return (
    <article className="text-amber-900 p-2 flex-1 flex flex-row gap-2 bg-amber-100 rounded-md">
      {Icons["person"]}
      <p>{user.email}</p>
    </article>
  );
}
