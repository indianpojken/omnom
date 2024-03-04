import { getUser } from "@/utils/user";
import UserToolbar from "@/components/UserToolbar";

export default async function Page() {
  const user = await getUser();

  return <UserToolbar user={user} />;
}
