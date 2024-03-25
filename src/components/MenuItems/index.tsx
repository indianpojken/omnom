import { motion } from "framer-motion";

import { Icons } from "@/components/Icons";
import type { Menu } from "@/types";

export default function MenuItems({ items }: { items: Menu[""]["items"] }) {
  return (
    <section className="flex flex-col gap-4">
      {items.map((item) => (
        <motion.article
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex gap-2 sm:flex-row flex-col"
          key={item.food}
        >
          <section className="flex flex-1">
            <article className="flex flex-1 items-center bg-amber-50 border-amber-900 rounded-md overflow-hidden border-b-2">
              <aside className="p-2 h-full flex items-center text-amber-900 bg-amber-100">
                {Icons["food"]}
              </aside>

              <p className="text-amber-950 px-2">{item.food}</p>
            </article>
          </section>

          {(item.allergies.length || item.vegetarian) && (
            <ol className="flex gap-2 flex-wrap">
              {item.vegetarian && (
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex-1 justify-center select-none items-center flex text-nowrap p-2 rounded-md text-xs uppercase font-semibold bg-green-300 text-green-900 p border-b-2 border-green-900"
                >
                  Vegetarisk
                </motion.li>
              )}

              {item.allergies.map((allergy, index) => (
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.05 * index + 0.4 + (item.vegetarian ? 0.1 : 0),
                  }}
                  key={allergy}
                  className="flex-1 justify-center items-center flex transition-colors select-none p-2 rounded-md text-xs uppercase font-semibold bg-amber-200 text-amber-900 border-b-2 border-amber-900"
                >
                  {allergy}
                </motion.li>
              ))}
            </ol>
          )}
        </motion.article>
      ))}
    </section>
  );
}
