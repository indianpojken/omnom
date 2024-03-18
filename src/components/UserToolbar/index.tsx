"use client";

import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import EditRestaurant from "../Forms/EditRestaurant";
import { useState } from "react";
import { icons } from "@/components/Icons";
import { Restaurant } from "@/types";

export default function UserToolbar({
  user,
  restaurant,
}: {
  user: User;
  restaurant?: Restaurant;
}) {
  const router = useRouter();
  const [showEditRestaurant, setShowEditRestaurant] = useState(false);

  const signOut = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push("/signin");
    }
  };

  return (
    <article className="flex flex-col rounded-md text-amber-900 border-b-amber-900 border-b-2 bg-amber-100 p-2">
      <section className="flex">
        <section className="flex gap-2">
          {icons["person"]}

          <p className="font-bold">{user.email}</p>
        </section>

        <section className="ml-auto flex gap-4">
          {restaurant && (
            <button
              className="duration-500 transition-colors hover:text-amber-600"
              title="Redigera restaurang"
              onClick={() => setShowEditRestaurant(!showEditRestaurant)}
            >
              {icons["edit"]}
            </button>
          )}

          <button
            className="duration-500 transition-colors hover:text-amber-600"
            title="Logga ut"
            onClick={async () => await signOut()}
          >
            {icons["logout"]}
          </button>
        </section>
      </section>

      <AnimatePresence>
        {showEditRestaurant && (
          <motion.section
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            // exit={{ scaleY: 0 }}
            className="mt-2 p-4 bg-white border border-amber-200 rounded-md"
          >
            <EditRestaurant restaurant={restaurant} />
          </motion.section>
        )}
      </AnimatePresence>
    </article>
  );
}
