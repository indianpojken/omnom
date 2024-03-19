import SignIn from "@/components/Forms/SignIn";
import { isLoggedIn } from "@/utils/user";
import { redirect } from "next/navigation";

export default async function Page() {
  if (await isLoggedIn()) {
    redirect("/manage");
  }

  return (
    <article className="flex h-screen justify-center items-center">
      <SignIn />
    </article>
  );
}
