import SignIn from "@/components/Forms/SignIn";
import { isLoggedIn } from "@/utils/user";
import { redirect } from "next/navigation";

export default async function Page() {
  if (await isLoggedIn()) {
    redirect("/manage");
  }

  return (
    <article className="m-auto items-center w-full max-w-96">
      <SignIn />
    </article>
  );
}
