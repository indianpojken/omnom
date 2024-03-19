import { Icons } from "@/components/Icons";
import { Restaurant } from "@/types";
import RestaurantToolbarButton from "./RestaurantToolbarButton";

export default function RestaurantToolbar({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  return (
    <section className="flex flex-0 gap-4 justify-around sm:justify-normal bg-amber-100 sm:bg-white rounded-md">
      {restaurant.website && (
        <RestaurantToolbarButton
          href={`http://${restaurant.website}`}
          icon={Icons["url"]}
        />
      )}

      {restaurant.phoneNumber && (
        <RestaurantToolbarButton
          href={`tel:${restaurant.phoneNumber}`}
          icon={Icons["phone"]}
        />
      )}

      <RestaurantToolbarButton
        href={`https://www.google.com/maps/search/?api=1&query=${restaurant.address.replaceAll(
          " ",
          "+"
        )},+${restaurant.zipCode},+${restaurant.municipal}`}
        icon={Icons["location"]}
      />
    </section>
  );
}
