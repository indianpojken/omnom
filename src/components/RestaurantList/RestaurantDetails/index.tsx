import { MotionSection } from "@/components/Motion";

import { icons } from "@/components/Icons";
import { Restaurant } from "@/types";
import RestaurantToolbar from "./RestaurantToolbar";

export default function RestaurantDetails({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  return (
    <section className="flex my-2 gap-2 sm:gap-4 flex-col sm:flex-row">
      <MotionSection
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="p-2 flex-1 flex flex-row flex-wrap bg-amber-100 px-2 rounded-md justify-between"
      >
        <article className="flex gap-2 text-amber-900">
          <aside>{icons["clock"]}</aside>
          <p className="text-amber-950">{restaurant.lunchHoursOpening}</p>
          <p>-</p>
          <p className="text-amber-950">{restaurant.lunchHoursClosing}</p>
        </article>

        <article className="flex gap-2 text-amber-900">
          <p className="text-amber-950">{restaurant.price}</p>
          <aside className="font-bold">SEK</aside>
        </article>
      </MotionSection>

      <RestaurantToolbar restaurant={restaurant} />
    </section>
  );
}
