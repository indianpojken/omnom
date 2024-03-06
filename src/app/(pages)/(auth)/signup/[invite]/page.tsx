import { getInviteById } from "@/services/invites";

import SignUp from "@/components/Forms/SignUp";

export default async function Page({ params }: { params: { invite: string } }) {
  // const invite = await getInviteById(params.invite);

  return (
    <article className="m-auto items-center w-96">
      <SignUp />
    </article>
  );
}
