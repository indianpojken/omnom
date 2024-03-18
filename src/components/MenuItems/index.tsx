import { icons } from "@/components/Icons";
import type { Menu } from "@/types";

export default function MenuItems({ items }: { items: Menu[""]["items"] }) {
  return (
    <section className="flex flex-col gap-4">
      {items.map((item) => (
        <article className="flex gap-2" key={item.food}>
          <section className="flex flex-1 gap-4">
            <article className="flex flex-1  items-center bg-amber-50 border-amber-900 rounded-md overflow-hidden border-b-2">
              <aside className="p-2 h-full flex items-center text-amber-900 bg-amber-100">
                {icons["food"]}
              </aside>

              <p className="text-amber-950 px-2">{item.food}</p>
            </article>
          </section>

          {(item.allergies.length || item.vegetarian) && (
            <ol className="flex gap-2 flex-wrap">
              {item.vegetarian && (
                <p className="flex-1 justify-center select-none items-center flex text-nowrap p-2 rounded-md text-xs uppercase font-semibold bg-green-300 text-green-900 p border-b-2 border-green-900">
                  Vegetarisk
                </p>
              )}

              {item.allergies.map((allergy) => (
                <li
                  key={allergy}
                  className="flex-1 justify-center items-center flex transition-colors select-none p-2 rounded-md text-xs uppercase font-semibold bg-amber-200 text-amber-900 border-b-2 border-amber-900"
                >
                  {allergy}
                </li>
              ))}
            </ol>
          )}
        </article>
      ))}
    </section>
  );
}
