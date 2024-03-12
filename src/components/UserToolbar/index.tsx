"use client";

import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import EditRestaurant from "../Forms/EditRestaurant";
import { useState } from "react";
import { icons } from "../Form/icons";
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>

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
