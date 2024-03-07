"use client";

import { TestAction } from "@/actions/test";
import { useForm, useFieldArray, UseFormReturn } from "react-hook-form";

import type { Menu } from "@/types";

function MenuField({ id, form }: { id: string; form: UseFormReturn<Menu> }) {
  const { control, register } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: `${id}.items`,
  });

  return (
    <article>
      {fields.map((data, index) => (
        <article key={`${index}`}>
          <input
            className="border border-zinc-300"
            placeholder="first name"
            {...register(`${id}.items.${index}.food`, {
              required: true,
            })}
          />

          <label className="select-none">
            <input
              type="checkbox"
              className="border border-zinc-300"
              {...register(`${id}.items.${index}.vegetarian`)}
            />
            Vegetarian
          </label>

          <section>
            <input
              type="checkbox"
              value="gluten"
              {...register(`${id}.items.${index}.allergies`)}
            />

            <input
              type="checkbox"
              value="laktos"
              {...register(`${id}.items.${index}.allergies`)}
            />
          </section>

          <button type="button" onClick={() => remove(index)}>
            REMOVE
          </button>
        </article>
      ))}

      <button
        type="button"
        onClick={() => append({ food: "", vegetarian: false, allergies: [] })}
      >
        +
      </button>
    </article>
  );
}

export default function Page() {
  const form = useForm<Menu>();

  return (
    <main className="flex mx-auto min-h-screen flex-col px-6 py-10 max-w-[800px]">
      <form
        className="flex flex-col items-start"
        action={() => form.handleSubmit((data) => TestAction(data))()}
      >
        <MenuField form={form} id="hej" />
        <input type="submit" />
      </form>
    </main>
  );
}
