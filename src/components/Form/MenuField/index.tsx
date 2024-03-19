"use client";

import { useFieldArray, UseFormReturn } from "react-hook-form";

import { AnimatePresence, motion } from "framer-motion";

import { Icons } from "@/components/Icons";
import { allergies } from "@/constants";
import type { Menu } from "@/types";

export default function MenuField({
  id,
  form,
}: {
  id: string;
  form: UseFormReturn<Menu>;
}) {
  const { control, register } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: `${id}.items`,
  });

  return (
    <article className="flex flex-col gap-4">
      <section className="flex flex-col gap-8">
        <AnimatePresence initial={false} mode="popLayout">
          {fields.map((data, index) => (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, height: 0 }}
              key={`${index}`}
              className="flex flex-col sm:flex-row gap-4"
            >
              <article className="flex flex-col flex-1 last:mb-2">
                <section className="flex flex-col sm:flex-row gap-4 mb-4">
                  <article className="flex flex-1 rounded-md overflow-hidden border-b-2 border-amber-900">
                    <aside className="flex justify-center bg-amber-100 p-2 text-amber-900">
                      {Icons["food"]}
                    </aside>

                    <label
                      className="sr-only"
                      htmlFor={`${id}.items.${index}.food`}
                    >
                      Maträtt
                    </label>

                    <input
                      className="flex-1 text-amber-950 bg-amber-50 p-2 outline-0 placeholder:text-zinc-400 focus:outline"
                      id={`${id}.items.${index}.food`}
                      placeholder="Maträtt"
                      {...register(`${id}.items.${index}.food`, {
                        required: true,
                      })}
                    />
                  </article>

                  <article className="min-h-full flex">
                    <input
                      type="checkbox"
                      className="peer hidden"
                      id={`${id}.items.${index}.vegetarian`}
                      {...register(`${id}.items.${index}.vegetarian`)}
                    />
                    <motion.label
                      whileTap={{ scale: 0.9 }}
                      className="flex-1 sm:flex-0 justify-center cursor-pointer flex text-nowrap transition-colors select-none p-2 rounded-md text-xs uppercase font-semibold bg-green-300 text-green-900 peer-checked:bg-green-700 peer-checked:text-green-50 hover:bg-green-700 hover:text-green-50 border-b-2 border-green-900"
                      htmlFor={`${id}.items.${index}.vegetarian`}
                    >
                      <p className="my-auto">Vegetarisk</p>
                    </motion.label>
                  </article>
                </section>

                <section>
                  <ul className="flex flex-wrap gap-2 ">
                    {allergies.map((allergy, allergyIndex) => (
                      <li key={allergy} className="flex-1">
                        <input
                          type="checkbox"
                          className="peer hidden"
                          value={allergy}
                          id={`${id}.items.${index}.allergies.${allergyIndex}`}
                          {...register(`${id}.items.${index}.allergies`)}
                        />
                        <motion.label
                          whileTap={{ scale: 0.9 }}
                          className="cursor-pointer justify-center flex transition-colors select-none p-2 rounded-md text-xs uppercase font-semibold bg-amber-200 text-amber-900 peer-checked:bg-amber-900 peer-checked:text-amber-100 hover:bg-amber-900 hover:text-amber-100 border-b-2 border-amber-900"
                          htmlFor={`${id}.items.${index}.allergies.${allergyIndex}`}
                        >
                          {allergy}
                        </motion.label>
                      </li>
                    ))}
                  </ul>
                </section>
              </article>

              <motion.button
                type="button"
                onClick={() => remove(index)}
                whileTap={{ scale: 0.9 }}
                className="flex p-2 sm:p-0 justify-center transition-colors text-red-50 items-center min-w-12 bg-red-400 border-b-2 border-red-900 hover:bg-red-700 rounded-md"
              >
                {Icons["remove"]}
              </motion.button>
            </motion.section>
          ))}
        </AnimatePresence>
      </section>

      <motion.button
        type="button"
        onClick={() => append([{ food: "", vegetarian: false, allergies: [] }])}
        whileTap={{ scale: 0.9 }}
        className="flex justify-center p-4 transition-colors text-green-50 items-center min-w-12 bg-emerald-500 border-b-2 border-emerald-900 hover:bg-emerald-700 rounded-md"
      >
        {Icons["add"]}
      </motion.button>
    </article>
  );
}
