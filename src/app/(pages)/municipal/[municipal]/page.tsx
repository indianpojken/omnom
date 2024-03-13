import Menu from "@/components/Menu";
import { MotionSection } from "@/components/Motion";
import { getRestaurantsByMunicipal } from "@/services/restaurants";

export default async function Page({
  params,
}: {
  params: { municipal: string };
}) {
  const municipal = decodeURIComponent(params.municipal);
  const restaurants = await getRestaurantsByMunicipal(municipal);

  return (
    <MotionSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col"
    >
      <header className="font-bold uppercase mb-2">{municipal}</header>

      <Menu restaurants={restaurants} />
    </MotionSection>
  );
}
