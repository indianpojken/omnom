import Invite from "./Invite";
import CreateInvite from "./CreateInvite";

import { getAllInvites } from "@/services/invites";

export default async function Invites() {
  const invites = await getAllInvites();

  return (
    <section className="flex flex-col">
      <header>
        <h2 className="text-zinc-900 font-bold uppercase">Inbjudningar</h2>
      </header>

      <CreateInvite />

      <ol className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {invites?.map((invite) => (
          <li key={invite.id}>
            <Invite invite={invite} />
          </li>
        ))}
      </ol>
    </section>
  );
}
