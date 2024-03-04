import { getInviteById } from "@/services/invites";

import SignUp from "@/components/Forms/SignUp";

export default async function Page({ params }: { params: { invite: string } }) {
  // const invite = await getInviteById(params.invite);

  return (
    <article className="w-96 gap-4 overflow-hidden">
      <SignUp />
    </article>
  );
}
