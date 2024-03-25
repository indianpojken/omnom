import { getRestaurant } from "@/services/restaurants";
import { MotionSection } from "@/components/Motion";
import RestaurantDetails from "@/components/RestaurantList/RestaurantDetails";
import { WeeklyRestaurantMenu } from "@/components/WeeklyRestaurantMenu";
import { Icons } from "@/components/Icons";

export default async function Page({
  params,
}: {
  params: { restaurant: string };
}) {
  const restaurantId = decodeURIComponent(params.restaurant);
  const restaurant = await getRestaurant(restaurantId);

  return (
    <MotionSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col"
    >
      <header className="flex gap-2">
        {Icons["restaurant"]}
        <h2 className="font-bold uppercase">{restaurant.name}</h2>
      </header>

      <RestaurantDetails restaurant={restaurant} />

      <WeeklyRestaurantMenu restaurantId={restaurant.id} />
    </MotionSection>
  );
}
